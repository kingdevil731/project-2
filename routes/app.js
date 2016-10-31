/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const express = require('express');

const router = express.Router();

const { searchSongs,
        getLyrics }       = require('../services/musixmatch');
const { yodaSpeak }       = require('../services/yoda');


router.get('/', (req, res) => {
  // res.json(res.results);
  res.render('app', {
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

router.post('/search', searchSongs, (req, res) => {
  // console.log(res.results);
  res.render('app', {
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

router.post('/lyrics', getLyrics, (req, res) => {
  // console.log(res.results);
  // res.json(res.results);
  res.render('app', {
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

router.post('/yoda', yodaSpeak, (req, res) => {
  // res.json(res.yoda);
  res.render('app', {
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

module.exports = router;
