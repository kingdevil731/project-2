const fetch = require('node-fetch');

const APP_URL = 'http://api.musixmatch.com/ws/1.1/';
const APP_ID = process.env.MUSIXMATCH_KEY;


function getLyrics(req, res, next) {
  fetch(`${APP_URL}track.lyrics.get?track_id=15953433&apikey=${APP_ID}`)
  .then(r => r.json())
  .then((result) => {
    res.results = result;
    next();
  })
  .catch((err) => {
    res.error = err;
    next();
  });
}

module.exports = { getLyrics };
