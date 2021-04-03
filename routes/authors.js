const express = require('express');
const router = express.Router();
const Author = require('../models/author');

// All Authors Route
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {     // Validation to check if there is a name in the form
    searchOptions.name = new RegExp(req.query.name, 'i');   // GET Request sends information through the Query String 'name=Pedro'. Use req.query to access params         
  }                                                        // RegExp to get Full name if we only send part of the String (Pe returns Pedro), 'i' means case Insensitive
  try { 
    const authors = await Author.find(searchOptions);
    res.render('authors/index', { 
      authors: authors, 
      searchOptions: req.query   // Send back the request to the user
    });
  } catch {
    res.redirect('/');
  }
});


// New Author Route - Get the form
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() });
});


// Create Author Route with Async/Await
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name
  });
    try {
        const newAuthor = await author.save()
        //res.redirect(`authors/${newAuthor.id}`);
        res.redirect('authors');
    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating Author'
      })
    }
  // author.save((err, newAuthor) => {         ---- OLD CODE WITH IF ELSES ----  WORSE THAN ASYNC/AWAITS -----
  //   if (err) {
  //     res.render('authors/new', {
  //       author: author,
  //       errorMessage: 'Error creating Author'
  //     })
  //   } else {
  //    //res.redirect(`authors/${newAuthor.id}`);
  //    res.redirect('authors');
  //   }
  // })
});

module.exports = router;