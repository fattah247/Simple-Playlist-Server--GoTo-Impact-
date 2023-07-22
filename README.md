# Simple Playlist Server (GoTo Impact)

This repository contains the code for a simple Spotify Playlist Management app. The app allows users to add songs to a playlist, play songs from the playlist, and retrieve a list of all the songs in the playlist. The app uses Node.js, Express.js, and MongoDB, with Mongoose as the ODM (Object Data Modeling) library.

## Requirements

Before running the app, make sure you have the following installed:
* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)

## Usage

1. Make sure your MongoDB server is running. If it's not running, start it with the following command:

```
mongod
```
2. Run the app:
```
node app.js
```
The server will start, and you should see a message indicating that it's running on http://localhost:3000.

## API Endpoints
### 1. Add a Song to the Playlist
* Endpoint: `POST /playlist/add`
* Request body:
```
{
  "title": "Song Title",
  "artists": ["Artist 1", "Artist 2"],
  "url": "https://example.com/song-url"
}
```
* Response:
```
{
  "message": "Song added to the playlist successfully"
}
```

### 2. Play a Song from the Playlist
* Endpoint: `GET /playlist/play/:id`
* Response:
```
{
  "message": "Playing the song"
}

```

### 3. Get List of Songs from the Playlist
* Endpoint: `GET /playlist/list`
* Response:
```
[
  {
    "_id": "song_id_1",
    "title": "Song Title 1",
    "artists": ["Artist 1", "Artist 2"],
    "url": "https://example.com/song-url-1"
  },
  {
    "_id": "song_id_2",
    "title": "Song Title 2",
    "artists": ["Artist 3", "Artist 4"],
    "url": "https://example.com/song-url-2"
  },
  ...
]
```



## Contribution guidelines ##
You could contact me on my LinkedIn or email to contribute or give some critiques, which I mentioned below. 

## Contacts ##

* [LinkedIn Profile](https://www.linkedin.com/in/muhammad24fattah/)
* Email : fattahmuhammad666@gmail.com
