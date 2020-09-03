'use strict'

const router = require('express').Router()
// const mediaRouter = require('./media')
const userRouter = require('./user')
const sportRouter = require('./SportRoute')


// router.use('/media', mediaRouter)
router.use('/users', userRouter)
router.use('/', sportRouter)


module.exports = router