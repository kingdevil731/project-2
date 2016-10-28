const fetch = require('node-fetch');

const APP_URL = 'http://api.musixmatch.com/ws/1.1/';
const APP_ID = process.env.MUSIXMATCH_KEY;

function searchSongs(req, res, next) {
  fetch(`${APP_URL}track.search?q_track=${req.body.searchTerm}&apikey=${APP_ID}`)
  // fetch(`${APP_URL}track.search?q_track=eagle%20vs%20crows&apikey=${APP_ID}`)
  .then(r => r.json())
  .then((result) => {
    res.songs = result.message.body.track_list;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}


function getLyrics(req, res, next) {
  fetch(`${APP_URL}track.lyrics.get?track_id=${req.body.selectSong}&apikey=${APP_ID}`)
  // fetch(`${APP_URL}track.lyrics.get?track_id=15953433&apikey=${APP_ID}`)
  .then(r => r.json())
  .then((result) => {
    res.results = result.message.body.lyrics;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}

module.exports = {
  searchSongs,
  getLyrics,
};
