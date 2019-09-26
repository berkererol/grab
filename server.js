// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const moment = require('moment');
moment().format();

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect((err) => {
  if (err) {
    console.log('Error connecting to database', err);
  } else {
    console.log('Connected to database');
  }
});


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cookieSession({
  name: 'session',
  keys: ['e1d50c4f-538a-4682-89f4-c002f10a59c8', '2d310699-67d3-4b26-a3a4-1dbf2b67be5c'],
}));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const menuItems = require('./routes/menu_items');
const foodCategories = require('./routes/food_categories');
const carts = require('./routes/carts');
const placedOrders = require('./routes/placed_orders');
const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use('/api/menu-items', menuItems(db));
app.use('/api/food_categories', foodCategories(db));
app.use('/api/carts', carts(db));
app.use('/api/orders', placedOrders(db));
app.use('/login', loginRoutes());
app.use('/logout', logoutRoutes());

// app.use('./api/foodCategories', foodCategories(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  const templateVar = {
    user: req.session.id
  };
  res.render("index",templateVar);
});

app.get("/menu", (req, res) => {
  const templateVar = {
    user: req.session.id
  };
  res.render("menu",templateVar);
});

app.get("/orders", (req, res) => {
  const templateVar = {
    user: req.session.id
  };
  res.render("orders",templateVar);
});

app.get("/orders/:id", (req, res) => {
  const templateVar = {
    user: req.session.id,
    orderId: req.params.id
  };
  res.render("specific_order",templateVar);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
