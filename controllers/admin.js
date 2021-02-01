const Gallery = require("../models/gallery");
const Team = require("../models/team");
const Init = require("../models/initiative");
const Auth = require("../models/authority");
const Partner = require("../models/partner");
const Blog = require("../models/blogs");
const News = require("../models/News");
const Eg = require("../models/eg");
const AWS = require("aws-sdk");
const uuid = require("uuid");

const s3 = new AWS.S3({
  accessKeyId: "AKIAIN3XQQQ67LDMNNOA",
  secretAccessKey: "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",
});

//gallery
exports.postGallery = async (req, res) => {
  let prod = req.file.buffer;
  let myfile = req.file.originalname.split(".");
  const fileType = myfile[myfile.length - 1];
  const params = {
    Bucket: "ecell-website",
    Key: `${uuid.v4()}.${fileType}`,
    Body: prod,
  };
  const galleryImg = new Gallery();
  try {
    s3.upload(params, async (er, data) => {
      if (er) {
        res.json(er);
      } else {
        let url = `${data.Location}`;
        galleryImg.image = url;
        await galleryImg.save();
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

exports.postGal = async (req, res) => {
  let data = JSON.parse(req.body.gal);
  let img = req.file.buffer;
  let myfile = req.file.originalname.split(".");
  const fileType = myfile[myfile.length - 1];
  const params = {
    Bucket: "ecell-website",
    Key: `${uuid.v4()}.${fileType}`,
    Body: img,
  };
  let eg = new Eg();
  eg.name = data.name;
  try {
    s3.upload(params, async (er, data) => {
      if (er) {
        res.json(er);
      } else {
        let url = `${data.Location}`;
        eg.image = url;
        await eg.save();
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

//team
exports.postTeam = async (req, res) => {
  let data = JSON.parse(req.body.team);
  let img = req.file.buffer;
  let myfile = req.file.originalname.split(".");
  const fileType = myfile[myfile.length - 1];
  const params = {
    Bucket: "ecell-website",
    Key: `${uuid.v4()}.${fileType}`,
    Body: img,
  };
  const teams = new Team();
  teams.name = data.name;
  teams.email = data.email;
  teams.phone = data.phone;
  teams.year = data.year;
  teams.post = data.post;
  teams.LinkedinId = data.linkedIn;
  try {
    s3.upload(params, async (er, data) => {
      if (er) {
        res.json(er);
      } else {
        let url = `${data.Location}`;
        teams.image = url;
        await teams.save();
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

exports.postEvent = async (req, res) => {
  let data = JSON.parse(req.body.event);
  let img = req.file.buffer;
  let myfile = req.file.originalname.split(".");
  const fileType = myfile[myfile.length - 1];
  const params = {
    Bucket: "ecell-website",
    Key: `${uuid.v4()}.${fileType}`,
    Body: img,
  };
  let init = new Init();
  init.eventName = data.name;
  init.sub = data.sub;
  init.sponsor = data.sponsor;
  init.date = data.date;
  init.description = data.description;
  try {
    s3.upload(params, async (er, data) => {
      if (er) {
        res.json(er);
      } else {
        let url = `${data.Location}`;
        init.image = url;
        await init.save();
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

exports.postAuth = async (req, res) => {
  let data = JSON.parse(req.body.auth);
  let img = req.file.buffer;
  let myfile = req.file.originalname.split(".");
  const fileType = myfile[myfile.length - 1];
  const params = {
    Bucket: "ecell-website",
    Key: `${uuid.v4()}.${fileType}`,
    Body: img,
  };
  let auth = new Auth();
  auth.name = data.name;
  auth.designation = data.designation;
  auth.description = data.description;
  try {
    s3.upload(params, async (er, data) => {
      if (er) {
        res.json(er);
      } else {
        let url = `${data.Location}`;
        auth.image = url;
        await auth.save();
        res.json(data);
      }
    });
  } catch (e) {
    console.log(e);
    res.json({ message: e.message });
  }
};

exports.postNews = async (req, res) => {
  let data = JSON.parse(req.body.news);
  let img = req.file.originalname;
  let news = new News();
  news.headline = data.headline;
  news.link = data.link;
  news.img = img;
  try {
    await news.save();
    res.json({ msg: "Details upload successfully", status: 200 });
    console.log("Success!");
  } catch (e) {
    res.json({ error: e.message, status: 404 });
    console.log(e);
  }
};

exports.postPartner = async (req, res) => {
  let data = req.body;
  const part = new Partner(data);
  try {
    await part.save();
    res.json({ msg: "Details upload successfully", status: 200 });
    console.log("Success!");
  } catch (e) {
    res.json({ error: e.message, status: 404 });
    console.log(e);
  }
};

exports.postBlog = async (req, res) => {
  let data = req.body;
  let blog = new Blog();
  blog.title = data.title;
  blog.sub = data.sub;
  blog.image = data.imageLink;
  blog.description = data.description;
  try {
    await blog.save();
    res.json({ msg: "Details upload successfully", status: 200 });
    console.log("Success!");
  } catch (e) {
    res.json({ error: e.message, status: 404 });
    console.log(e);
  }
};
