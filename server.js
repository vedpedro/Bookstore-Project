const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');

// Setting up ejs for the views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// Mongoose Connection
const connectionURL = 'mongodb://127.0.0.1:27017/mybrary';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);