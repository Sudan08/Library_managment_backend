
const BookModel = require('../model/bookModel');
const checkIfAuthenticated = require('../../../middlewares/validateAuth');

const getBooks = async (res, req) => {
    // const {
    //     token
    // } = req;

    try {
        const books = await BookModel.find();
        res.status(200).json({
            books
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
    
}

module.exports = getBooks;