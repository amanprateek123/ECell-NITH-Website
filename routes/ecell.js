const express = require('express')
const ctrl = require('../controllers/ecell')

const router = new express.Router()

router.get('/gallery',ctrl.getGallery)
router.get('/team',ctrl.getTeam)
router.get('/initiative',ctrl.getEvent)

module.exports = router