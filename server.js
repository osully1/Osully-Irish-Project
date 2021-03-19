const express = require('express');
const morgan = require('morgan');
const port = 3000;
require("./config/database");

// Require routers
const indexRouter = require('./routes/index');
const wondersRouter = require('./routes/wonders');

// Set up express
const app = express();

// Connect to mongo DB

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/wonders', wondersRouter);

// Tell App to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});