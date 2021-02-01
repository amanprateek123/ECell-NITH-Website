const express = require("express");
const adminCtrl = require("../controllers/admin");
const path = require("path");
const multer = require("../middleware/multer");
const router = new express.Router();

router.post("/gallery", multer.single("gallery"), adminCtrl.postGallery);
router.post("/gal", multer.single("gal"), adminCtrl.postGal);
router.post("/team", multer.single("teamImg"), adminCtrl.postTeam);
router.post("/initiative", multer.single("eventImg"), adminCtrl.postEvent);
router.post("/auth", multer.single("auth"), adminCtrl.postAuth);
router.post("/partner", adminCtrl.postPartner);
router.post("/blogs", adminCtrl.postBlog);
router.post("/news", multer.single("news"), adminCtrl.postNews);

module.exports = router;
