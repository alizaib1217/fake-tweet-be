// imports
const mongoose = require("mongoose");

// Schema
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    time: { type: String, required: true },
    tweet: { type: String, required: true },
    file: { type: String, required: true },
    verified: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

// Module
module.exports = Tweets = mongoose.model("tweets", schema);
