const express = require('express')
const ctrl = require('../controllers/ecell')

const router = new express.Router()

router.get('/api/gallery',ctrl.getGallery)
router.get('/api/team',ctrl.getTeam)
router.get('/api/initiative',ctrl.getEvent)
router.get('/api/initiatives',ctrl.getEventInd)
router.get('/api/auth',ctrl.getAuth)
router.get('/api/partner',ctrl.getPartner)
router.post('/api/getInTouch',ctrl.getInTouch)
router.get('/api/blogs',ctrl.getBlog)
router.get('/api/news',ctrl.getNews)


module.exports = router