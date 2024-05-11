// models/songModel.js
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  url: {
    type: String,
    required: true
  },
  imageUrl: String // New field for image URL
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
