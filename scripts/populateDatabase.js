// scripts/populateDatabase.js
const mongoose = require('mongoose');
const Song = require('../models/Song');
const Artist = require('../models/Artist');
const PopularSong = require('../models/PopularSong');

// Function to populate the database with sample data
async function populateDatabase() {
  try {
    // Create artists
    const artists = await Artist.create([
      { name: 'Artist 1', dateOfBirth: new Date('1990-01-01'), genres: ['Pop'] },
      { name: 'Artist 2', dateOfBirth: new Date('1985-03-15'), genres: ['Rock'] },
      // Add more artists here
    ]);

    // Create songs with associated artists
    const songs = await Song.create([
      {
        title: 'Song 1',
        artists: [artists[0]._id],
        url: 'https://spotify.com/song1',
      },
      {
        title: 'Song 2',
        artists: [artists[1]._id],
        url: 'https://spotify.com/song2',
      },
      // Add more songs here
    ]);

    // Create popular songs
    await PopularSong.create([
      { song: songs[0]._id, playCount: 100, period: '2023-06' },
      { song: songs[1]._id, playCount: 80, period: '2023-06' },
      // Add more popular songs here
    ]);

    console.log('Database populated successfully.');
  } catch (error) {
    console.error('Error populating the database:', error);
  } finally {
    // Close the MongoDB connection when done
    mongoose.connection.close();
  }
}

// Connect to MongoDB and call the populateDatabase function
mongoose
  .connect('mongodb://127.0.0.1:27017/spotify_playlist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    populateDatabase();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
