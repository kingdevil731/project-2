/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express = require('express');

const favRouter = express.Router();

const { authenticate }    = require('../lib/auth');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

favRouter.get('/', authenticate, getFavorites, (req, res) => {
  res.render('favorites', {
    user: res.user,
    favorites: res.favorites || [],
  });
});

favRouter.delete('/:id', deleteFavorites, (req, res) => {
  res.redirect('/favorites');
});

favRouter.post('/', saveFavorite, (req, res) => {
  res.redirect('./users/profile');
});

module.exports = favRouter;
