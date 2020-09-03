'use strict'

const router = require('express').Router()
const MediaController = require('../controllers/MediaController')
const {authentication} = require('../middlewares/authentication');

router.use(authentication)
router.get("/", MediaController.getMedia);
router.post("/", MediaController.addMedia);
router.put("/:id", MediaController.updateMedia);
router.delete("/:id", MediaController.deleteMedia);



module.exports = router