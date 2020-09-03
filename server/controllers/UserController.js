'use strict'

const { User } = require('../models')
const { checkPassword } = require('../helpers/bcryptjs')
const { generateToken } = require('../helpers/jwt')

class UserController {
  static register (req, res, next) {

  }
  
  static login (req, res, next) {

  }
}

module.exports = UserController