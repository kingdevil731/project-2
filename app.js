/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

require('dotenv').config();

const express         = require('express');
const logger          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const indexRouter     = require('./routes/index.js');
const authRouter      = require('./routes/auth');
const usersRouter     = require('./routes/users');
const favRouter       = require('./routes/favorites');

const app            = express();
const SECRET         = 'tacos3000';
const PORT           = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, () => console.warn('server up and running on port', PORT));

app.use(logger('dev'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));


app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/favorites', favRouter);

