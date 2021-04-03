const mongoose = require('mongoose');
const path = require('path');

const coverImageBasePath = 'uploads/booksCovers'; // path to folder for img files

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  publishDate: {
    type: Date,
    required: true
  },
  pageCount: {
    type: Number,
    required: true
  },
  createdAt: {  // remove here
    type: Date,
    required: true,
    default: Date.now
  },
  coverImageName: {
    type: String,
    required: true
  },      
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author'  // ref do modelo Author
  }
});

bookSchema.virtual('coverImagePath').get(function() {
  if (this.coverImageName != null) {
    return path.join('/', coverImageBasePath, this.coverImageName)
  }
});

module.exports = mongoose.model('Book', bookSchema);

module.exports.coverImageBasePath = coverImageBasePath; // export img 