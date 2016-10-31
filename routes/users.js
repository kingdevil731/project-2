/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createUser }    = require('../models/user.js');
const { authenticate }   = require('../lib/auth');
const { searchSongs,
        getLyrics }  = require('../services/musixmatch');
const { yodaSpeak }  = require('../services/yoda');

const usersRouter  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/');
});

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protected" by the authenticate middleware from the auth library
 */
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
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

usersRouter.post('/lyrics', authenticate, getLyrics, (req, res) => {
  // console.log(res.results);
  // res.json(res.results);
  res.render('users/profile', {
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

usersRouter.post('/yoda', authenticate, yodaSpeak, (req, res) => {
  // res.json(res.yoda);
  res.render('users/profile', {
    songs: res.songs || [],
    results: res.results || [],
    yoda: res.yoda || [],
  });
});

module.exports = usersRouter;
