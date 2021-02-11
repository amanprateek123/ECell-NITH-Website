const express = require("express");
const ctrl = require("../controllers/ecell");

const router = new express.Router();

router.get("/gallery", ctrl.getGallery);
router.get("/gal", ctrl.getGal);
router.get("/team", ctrl.getTeam);
router.get("/initiative", ctrl.getEvent);
router.get("/initiatives", ctrl.getEventInd);
router.get("/auth", ctrl.getAuth);
router.get("/partner", ctrl.getPartner);
router.post("/getInTouch", ctrl.getInTouch);
router.get("/blogs", ctrl.getBlog);
router.get("/news", ctrl.getNews);

module.exports = router;
