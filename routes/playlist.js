// routes/playlist.js
const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Add song to the playlist
router.post('/add', async (req, res) => {
  try {
    const { title, artists, url } = req.body;
    const song = new Song({ title, artists, url });
    await song.save();
    res.status(201).json({ message: 'Song added to the playlist successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the song to the playlist' });
  }
});

// Play a song from the playlist
router.get('/play/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }
    // Your logic to play the song goes here (e.g., streaming the URL).
    res.json({ message: 'Playing the song' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to play the song' });
  }
});

// Get list of songs from the playlist
router.get('/list', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the playlist' });
  }
});

module.exports = router;
