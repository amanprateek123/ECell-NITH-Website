const Gallery = require("../models/gallery");
const Team = require("../models/team");
const Init = require("../models/initiative");
const GetInTouch = require("../models/getInTouch");
const Auth = require("../models/authority");
const Partner = require("../models/partner");
const Blog = require("../models/blogs");
const News = require("../models/News");
const Eg = require("../models/eg");
const Sip = require("../models/sip");
const AWS = require("aws-sdk");
const uuid = require("uuid");
const path = require("path");

const s3 = new AWS.S3({
  accessKeyId: "AKIA5U7BMGANBHMVRTNA",
  secretAccessKey: "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",
});

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

exports.postSIP = async (req, res) => {
  try {
    let d = JSON.parse(req.body.sip);
    let user = d.data;
    Object.keys(user).map((key) => {
      if (user[key] === "") {
        throw new Error(`Please fill the ${key} first`);
      }
    });

    let u = await Sip.find({ email: user.email });

    if (u.length > 0) {
      throw new Error("You had already registered");
    }

    if (path.extname(req.file.originalname) !== ".pdf") {
      throw new Error("Only pdfs are allowed");
    }
    let prod = req.file.buffer;
    let myfile = req.file.originalname.split(".");
    const fileType = myfile[myfile.length - 1];
    const params = {
      Bucket: "ecell-bucket",
      Key: `${uuid.v4()}.${fileType}`,
      Body: prod,
    };
    const sip = new Sip();
    let comp = d.companies;
    sip.email = user.email;
    sip.name = user.name;
    sip.contact = user.contact;
    sip.roll = user.roll;
    sip.course = user.course;
    sip.branch = user.branch;
    sip.year = user.year;
    sip.companies = [...comp];
    res.json({
      status: 200,
      message: "Your form is successfully submitted",
    });
    s3.upload(params, async (er, data) => {
      if (er) {
        res.json(er);
      } else {
        let url = `${data.Location}`;
        sip.cv = url;
        await sip.save();
      }
    });
  } catch (e) {
    res.json({ status: 401, message: e.message });
  }
};
