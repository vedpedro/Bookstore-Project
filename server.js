const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');


const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bookRouter = require('./routes/books');

// Read JSON objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser); DEPRECATED

// Setting up ejs for the views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// Mongoose Connection
const connectionURL = 'mongodb://127.0.0.1:27017/my-library';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.listen(process.env.PORT || 3000);