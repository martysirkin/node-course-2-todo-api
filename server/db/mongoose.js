const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://marty:00Zind00@ds231951.mlab.com:31951/zindel', {useNewUrlParser: true});

module.exports = { mongoose };