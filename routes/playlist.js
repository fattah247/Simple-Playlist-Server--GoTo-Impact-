// routes/playlist.js
const express = require('express');
const router = express.Router();
const Song = require('../models/Song');
const Artist = require('../models/Artist');
const PopularSong = require('../models/PopularSong');

// Add song to the playlist
router.post('/add', async (req, res) => {
  try {
    const { title, artists, url } = req.body;

    if (!title || !artists || !url) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create or find artists and add them to the song
    const artistObjects = await Promise.all(
      artists.map(async (artistName) => {
        let artist = await Artist.findOne({ name: artistName });
        if (!artist) {
          artist = new Artist({ name: artistName });
          await artist.save();
        }
        return artist;
      })
    );

    const song = new Song({ title, artists: artistObjects.map((a) => a._id), url });
    await song.save();
    res.status(201).json({ message: 'Song added to the playlist successfully' });
  } catch (error) {
    console.error('Error adding song to the playlist:', error);
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
    song.playCount++; // Increment the play count
    await song.save();
    res.json({ message: 'Playing the song' });
  } catch (error) {
    console.error('Error playing the song:', error);
    res.status(500).json({ error: 'Failed to play the song' });
  }
});

// Get list of songs from the playlist
router.get('/list', async (req, res) => {
  try {
    const songs = await Song.find().populate('artists');
    res.json(songs);
  } catch (error) {
    console.error('Error fetching the playlist:', error);
    res.status(500).json({ error: 'Failed to fetch the playlist' });
  }
});

// Get list of songs sorted by most played
router.get('/most-played', async (req, res) => {
  try {
    console.log('Received request for most-played songs');
    const songs = await Song.find().sort({ playCount: -1 });
    console.log('Sending most-played songs:', songs);
    res.json(songs);
  } catch (error) {
    console.error('Error fetching most played songs:', error);
    res.status(500).json({ error: 'Failed to fetch most played songs' });
  }
});

module.exports = router;
