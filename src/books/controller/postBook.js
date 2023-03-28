
const BookModel = require('../model/bookModel');


const postBook = async (res, req) => {
    try {
        console.log(req);
        const books = await BookModel.create(req);
        res.status(200).json({
            books
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
    
}

module.exports = postBook;