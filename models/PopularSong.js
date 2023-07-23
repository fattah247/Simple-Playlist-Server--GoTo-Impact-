// models/PopularSong.js
const mongoose = require('mongoose');

const popularSongSchema = new mongoose.Schema({
  song: { type: mongoose.Schema.Types.ObjectId, ref: 'Song' },
  playCount: { type: Number, default: 0 },
  period: { type: String },
});

const PopularSong = mongoose.model('PopularSong', popularSongSchema);
module.exports = PopularSong;