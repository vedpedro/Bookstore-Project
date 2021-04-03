const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  let books
  try {
    books = Book.find().sort({ createdAt: 'desc' }).limit(5).exec(); // order by Created At and limit by 5 
  } catch {
    books= []; // if error, send books to empty array
  }
  res.render('index', { books: books }); 
})



module.exports = router;