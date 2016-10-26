/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

const app            = express();
const PORT           = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, () => console.warn('server up and running on port', PORT));

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));
