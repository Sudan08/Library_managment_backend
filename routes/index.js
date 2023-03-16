const status = require('../src/health/routes');
const users = require('../src/users/routes');
const books = require('../src/books/routes');
// const validateAuth = require('../middlewares/validateAuth');
// const getData = require('../middlewares/getData');

module.exports = (app) => {
  app.use('/status', status);
  app.use('/users', users);
  app.use('/books', books);
  // app.use('/users', validateAuth.checkIfAuthenticated, users);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
  