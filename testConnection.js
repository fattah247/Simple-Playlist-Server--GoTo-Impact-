const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/spotify_playlist';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
