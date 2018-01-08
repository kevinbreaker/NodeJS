const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_rest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;