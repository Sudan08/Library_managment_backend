const { getBooks } = require('./getBooks');
const postBook = require('./postBook');
const {getSingleBook} = require('./getBooks');
const {deleteBook} = require('./getBooks');


module.exports = { getBooks , postBook , getSingleBook , deleteBook};