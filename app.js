/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

require('dotenv').config();
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

const { searchSongs,
        getLyrics }  = require('./services/musixmatch');

const app            = express();
const PORT           = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, () => console.warn('server up and running on port', PORT));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

/* ------------------------ */

app.get('/', searchSongs, getLyrics, (req, res) => {
  // res.json(res.results);
  res.render('index', {
    songs: res.songs || [],
    results: res.results,
  });
});

app.post('/search', searchSongs, getLyrics, (req, res) => {
  // console.log(res.results);
  res.render('index', {
    songs: res.songs || [],
    results: res.results,
  });
});

// app.get('/lyrics', getLyrics, (req, res) => {
//   console.log(res.results);
//   // res.json(res.results);
//   // res.render('index', {
//   //   results: res.results,
//   // });
// });
