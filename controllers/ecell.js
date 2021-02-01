const Gallery = require("../models/gallery");
const Team = require("../models/team");
const Init = require("../models/initiative");
const GetInTouch = require("../models/getInTouch");
const Auth = require("../models/authority");
const Partner = require("../models/partner");
const Blog = require("../models/blogs");
const News = require("../models/News");
const Eg = require("../models/eg");

//gallery
exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find({});
    res.set("Content-Type", "image/jpg");
    res.send(gallery);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

exports.getGal = async (req, res) => {
  try {
    const gal = await Eg.find({}).where({ name: req.query.name });
    res.set("Content-Type", "image/jpg");
    res.send(gal);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

exports.getTeam = async (req, res) => {
  try {
    const team = await Team.find({});
    res.json(team);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Init.find({});
    res.json(event);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};
exports.getEventInd = async (req, res) => {
  try {
    const event = await Init.find({ _id: req.query.id });
    res.json(event);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

exports.getInTouch = async (req, res) => {
  const get = new GetInTouch(req.body);
  try {
    await get.save();
    res.json({ status: 200, message: "The Message is Sent!" });
  } catch (e) {
    res.json({ status: 404, message: e.message });
  }
};

exports.getAuth = async (req, res) => {
  try {
    const auth = await Auth.find({});
    res.json(auth);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

exports.getPartner = async (req, res) => {
  try {
    const part = await Partner.find({});
    res.json(part);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.json(blog);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.find({});
    res.json(news);
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
};
