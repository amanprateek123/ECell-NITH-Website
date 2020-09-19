const express = require('express')
const ctrl = require('../controllers/ecell')
const Team = require('../models/team')
const router = new express.Router()

router.get('/team',ctrl.getTeam)

module.exports = router