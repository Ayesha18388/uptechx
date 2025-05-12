const mongoose = require("mongoose");

const HackathonSchema = new mongoose.Schema({
  title: String,
  dates: String,
  mode: String,
  location: String,
  description: String,
  link: String,
});

module.exports = mongoose.model("Hackathon", HackathonSchema);
