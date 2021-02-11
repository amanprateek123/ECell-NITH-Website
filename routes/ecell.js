const express = require("express");
const ctrl = require("../controllers/ecell");

const router = new express.Router();

router.get("/api/api/gallery", ctrl.getGallery);
router.get("/api/api/gal", ctrl.getGal);
router.get("/api/api/team", ctrl.getTeam);
router.get("/api/api/initiative", ctrl.getEvent);
router.get("/api/api/initiatives", ctrl.getEventInd);
router.get("/api/api/auth", ctrl.getAuth);
router.get("/api/api/partner", ctrl.getPartner);
router.post("/api/api/getInTouch", ctrl.getInTouch);
router.get("/api/api/blogs", ctrl.getBlog);
router.get("/api/api/news", ctrl.getNews);

module.exports = router;
