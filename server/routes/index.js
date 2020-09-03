'use strict'

const router = require('express').Router()
const mediaRouter = require('./media')
const userRouter = require('./user')

router.use('/media', mediaRouter)
router.use('/users', userRouter)


module.exports = router