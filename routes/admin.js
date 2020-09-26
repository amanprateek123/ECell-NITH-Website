const express = require('express')
const adminCtrl = require('../controllers/admin')
const path = require('path')
const upload = require('../middleware/multer')
const router = new express.Router()

router.post('/gallery',upload.single('gallery'),adminCtrl.postGallery)
router.post('/team',upload.single('teamImg'),adminCtrl.postTeam)
router.post('/initiative',upload.single('eventImg'),adminCtrl.postEvent)

module.exports = router