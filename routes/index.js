const users = require('../src/users/routes');
const books = require('../src/books/routes');
const booking = require('../src/booking/routes');
const mybooks = require('../src/mybooks/routes');
const {checkIfAuthenticated} = require('../middlewares/validateAuth');

module.exports = (app) => {
  app.use('/users', users);
  app.use('/books',books);
  app.use('/booking',booking);
  app.use('/mybooks',mybooks);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
  