const express = require('express')
const adminCtrl = require('../controllers/admin')


const router = new express.Router()

//gallery
router.post('gallery',adminCtrl.postGallery)

module.exports = router