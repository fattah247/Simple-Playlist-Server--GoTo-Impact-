# Simple Playlist Server (GoTo Impact)

This repository contains the code for a simple Spotify Playlist Server. The server allows users to add songs to a playlist, play songs from the playlist, and retrieve a list of all the songs in the playlist. The app uses Node.js, Express.js, and MongoDB, with Mongoose as the ODM (Object Data Modeling) library.

## Requirements

Before running the app, make sure you have the following installed:
* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)

## Directory Structure

The project structure is organized as follows:
* `models/`: Contains Mongoose models for Artist, Song, and PopularSong.
* `routes/`: Contains the Express routes for handling playlist actions.
* `scripts`: Contains scripts to populate the database with sample data.
* `app.js`: The main application file that sets up the Express server and connects to MongoDB.
* `package.json`: The npm package configuration file.

## Installation
1. Clone the repository

2. Install the dependencies:

```
npm install
```

## Usage

1. Make sure your MongoDB server is running. If it's not running, start it with the following command:

```
mongod
```
2. To populate the database with sample data, run the following command:

```
npm run populate
```
2. Run the app:
```
npm run populate
```
The server will start, and you should see a message indicating that it's running on http://localhost:3000. You can interact with the API using tools like curl, Postman, or any other HTTP client.

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
  * if succesful:
    * Status Code: 201 Created
    * Response Body: 
    ```
    {
      "message": "Song added to the playlist successfully"
    }
    ```
  * If there are missing required fields in the request body:
    * Status Code: 400 Bad Request
    * Response Body: 
    ```
    {
      "error": "Missing required fields"
    }
    ```
  * If there is an error adding the song to the playlist:
    * Status Code: 500 Internal Server Error
    * Response Body: 
    ```
    {
      "error": "Failed to add the song to the playlist"
    }
    ```

### 2. Play a Song from the Playlist
* Endpoint: `GET /playlist/play/:id`
* Response:
  * If the song is found and played successfully:
    * Status Code: 200 OK
    * Response Body: 
    ```
    {
      "message": "Playing the song"
    }
    ```
  * If the song with the given ID is not found in the playlist:
    * Status Code: 404 Not Found
    * Response Body: 
    ```
    {
      "error": "Song not found"
    }
    ```
  * If there is an error playing the song:
    * Status Code: 500 Internal Server Error
    * Response Body: 
    ```
    {
      "error": "Failed to play the song"
    }
    ```

### 3. Get List of Songs from the Playlist
* Endpoint: `GET /playlist/list`
* Response:
  * If the song is found and played successfully:
    * Status Code: 200 OK
    * Response Body: 
    ```
    [
      {
        "_id": "song_id",
        "title": "Song Title",
        "artists": [
          {
            "_id": "artist_id",
            "name": "Artist 1",
            "dateOfBirth": "Artist DOB",
            "genres": ["Pop"]
          },
          {
            "_id": "artist_id",
            "name": "Artist 2",
            "dateOfBirth": "Artist DOB",
            "genres": ["Rock"]
          }
        ],
        "url": "https://spotify.com/song-url",
        "playCount": 5
      },
      {
        "_id": "song_id",
        "title": "Another Song",
        "artists": [
          {
            "_id": "artist_id",
            "name": "Artist 3",
            "dateOfBirth": "Artist DOB",
            "genres": ["Hip-Hop"]
          }
        ],
        "url": "https://spotify.com/another-song",
        "playCount": 12
      },
      // More songs in the playlist
    ]

    ```
  * If there is an error fetching the playlist:
    * Status Code: 500 Internal Server Error
    * Response Body: 
    ```
    {
      "error": "Failed to fetch the playlist"
    }
    ```
### 3. Get the List of Most Played Songs
* Endpoint: `GET /playlist/most-played`
* Response:
  * If the song is found and played successfully:
    * Status Code: 200 OK
    * Response Body: 
    ```
    [
      {
        "_id": "song_id",
        "title": "Song Title",
        "artists": [
          {
            "_id": "artist_id",
            "name": "Artist 1",
            "dateOfBirth": "Artist DOB",
            "genres": ["Pop"]
          }
        ],
        "url": "https://spotify.com/song-url",
        "playCount": 100
      },
      {
        "_id": "song_id",
        "title": "Another Song",
        "artists": [
          {
            "_id": "artist_id",
            "name": "Artist 2",
            "dateOfBirth": "Artist DOB",
            "genres": ["Rock"]
          }
        ],
        "url": "https://spotify.com/another-song",
        "playCount": 80
      },
      // More songs sorted by most played
    ]
    ```
  * If there is an error fetching the most played songs:
    * Status Code: 500 Internal Server Error
    * Response Body: 
    ```
    {
      "error": "Failed to fetch most played songs"
    }
    ```

## Contribution guidelines ##
You could contact me on my LinkedIn or email to contribute or give some critiques, which I mentioned below. 

## Contacts ##

* [LinkedIn Profile](https://www.linkedin.com/in/muhammad24fattah/)
* Email : fattahmuhammad666@gmail.com
