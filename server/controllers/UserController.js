'use strict'

const { User } = require('../models')
const { checkPassword } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class UserController {
  static async register(req, res, next) {
    const { username, email, password } = req.body
    try {
      const newUser = await User.create({ username, email, password })
      return res.status(201).json({ username, email })
    } catch (err) {
      next (err)
    }
  }
  static async login(req, res, next) {
    const { email, password } = req.body

    try {
      const userLogin = await User.findOne({ where : { email }})
      if (!userLogin) {
        throw { message : "Invalid email or password", statusCode: 400 }
      } else {
        if (checkPassword(password, userLogin.password)) {
          
          const access_token = generateToken(userLogin)
          return res.status(200).json({ access_token })
        } else {
          
          throw { message : "Invalid email or password", statusCode: 400 }
        }
      }
    } catch (err) {
      next (err)
    }
  }

  static loginGoogle (req, res, next) {
    let payload = null
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
    client.verifyIdToken({
      idToken: req.body.id_token,
      audience: process.env.GOOGLE_CLIENT_ID
    })
      .then((ticket) => {
        payload = ticket.getPayload()
        return User.findOne({ email: payload.email })
      })
      .then((user) => {
        if (user) {
          console.log('User is already registered in the server')
          return user
        } else {
          console.log('Create new user!')
          return User.create({
            username: payload.name,
            email: payload.email,
            password: process.env.DEFAULT_PASSWORD
          })
        }
      })
      .then((user) => {
        payload = { id: user._id, email: user.email }
        const token = generateToken(payload)
        res.status(201).json({
          message: 'Successfully logged in', token
        })
      })
      .catch(next)
  }

}


module.exports = UserController