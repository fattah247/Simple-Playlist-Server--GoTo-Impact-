// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const playlistRoutes = require('./routes/playlist');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/spotify_playlist', {
  useNewUrlParser: true,           // <-- Use this option instead
  useUnifiedTopology: true,      // <-- Use this option instead
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Routes
app.use('/playlist', playlistRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
