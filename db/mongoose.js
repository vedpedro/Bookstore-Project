const mongoose = require('mongoose');

// Mongoose Connection
const connectionURL = 'mongodb://127.0.0.1:27017/my-library';

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});