const mongoose = require("mongoose");
const validator = require("validator");

const egSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Eg = mongoose.model("Eg", egSchema);

module.exports = Eg;
