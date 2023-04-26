const mongoose = require('mongoose');

const config = require('../../config');

const dbUrl = config.dbUrlMongoDB;

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.connect(
  dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log('Error', err);
    else console.log('Mongodb connected');
  }
);

module.exports = mongoose;
