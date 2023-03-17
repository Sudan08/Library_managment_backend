
const BookModel = require('../model/bookModel');


const postBooks = async (res, req) => {
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