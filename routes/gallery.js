const express = require('express')
const Gallery = require('../models/gallery')
const ctrl = require('../controllers/ecell')

const router = new express.Router()

router.post('/gallery',ctrl.postGallery)

router.get('/gallery',ctrl.getGallery)

module.exports = router