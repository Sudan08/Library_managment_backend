const { getBooks } = require('./getBooks');
const {postBook} = require('./postBook');
const {getSingleBook} = require('./getBooks');
const {deleteBook} = require('./getBooks');
const { updateBook } = require('./postBook');

module.exports = { updateBook, getBooks , postBook , getSingleBook , deleteBook};