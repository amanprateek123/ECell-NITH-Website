const mongoose = require("mongoose");
const validator = require("validator");

const sipSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  contact: {
    type: String,
  },
  roll: {
    type: String,
  },
  course: {
    type: String,
  },
  branch: {
    type: String,
  },
  year: {
    type: String,
  },
  companies: {
    type: [{ type: String }],
  },
  cv: {
    type: String, //image stored in form of buffer in database
  },
});

const Sip = mongoose.model("Sip", sipSchema);

module.exports = Sip;
