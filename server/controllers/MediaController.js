'use strict'

const { Media } = require('../models')

class MediaController {
  static getMedia (req, res, next) {
    const id = req.userData.id
    try {
      let show = await Media.findAll({
        where: {
          UserId: id
        }
      })
      res.status(200).json(show)
    } catch (err) {
      return next(err)
    }
  }

  static addMedia (req, res, next) {
    const {title,url_link,review} = req.body
    const UserId = req.userData.id

    try {
      let create = await Media.create({
        title,url_link,review,UserId
      })
      res.status(201).json(create)
    } catch (err) {
      return next(err)
    }
  }

  static updateMedia (req, res, next) {
    const {title,url_link,review} = req.body
    const id = req.params.id

    try {
      let data = await Media.update({
        title,url_link,review
      }, {
        where: {
          id:id
        }
      })
      if(data[0]) {
        res.status(200).json({message:'succes update'})
      } else {
        throw {message: "Todo not found", statusCode:404}
      }
    } catch (err) {
      return next(err)
    }
  }

  static deleteMedia (req, res, next) {
    try {
      await Media.destroy({where: {id:req.params.id}})
      res.status(200).json({message:'Berhasil dihapus'})
    } catch (err) {
      return next(err)
    }
  }

}

module.exports = MediaController