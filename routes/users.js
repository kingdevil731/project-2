/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express            = require('express');

const { createUser }     = require('../models/user.js');
const { authenticate }   = require('../lib/auth');
const { yodaSpeak }      = require('../services/yoda');
const { searchSongs,
        getLyrics }      = require('../services/musixmatch');

const usersRouter        = express.Router();


usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/');
});


usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/profile', {
    user: res.user,
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

usersRouter.post('/search', authenticate, searchSongs, (req, res) => {
  // console.log(res.results);
  res.render('users/profile', {
    user: res.user,
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

usersRouter.post('/lyrics', authenticate, getLyrics, (req, res) => {
  // console.log(res.results);
  // res.json(res.results);
  res.render('users/profile', {
    user: res.user,
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

usersRouter.post('/yoda', authenticate, yodaSpeak, (req, res) => {
  // res.json(res.yoda);
  res.render('users/profile', {
    user: res.user,
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

module.exports = usersRouter;
