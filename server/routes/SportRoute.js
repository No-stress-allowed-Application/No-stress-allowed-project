const SportController = require('../controllers/SportsController')
const router = require('express').Router()

router.get('/sport', SportController.getSport)

module.exports = router;