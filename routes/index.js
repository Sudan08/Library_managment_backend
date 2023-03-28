const status = require('../src/health/routes');
const users = require('../src/users/routes');
const books = require('../src/books/routes');
const {checkIfAuthenticated} = require('../middlewares/validateAuth');

module.exports = (app) => {
  app.use('/status', status);
  app.use('/users', users);
  app.use('/books',books);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
  