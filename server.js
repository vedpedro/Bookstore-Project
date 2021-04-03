const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
require('./db/mongoose');

// Update and Delete from browser
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bookRouter = require('./routes/books');

// Read JSON objects
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Setting up ejs for the views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.use('/books', bookRouter);

const port = app.listen(process.env.PORT || 3000);

app.listen(port, () => {
    console.log("O servidor iniciou");
})