
const BookModel = require('../../books/model/bookModel');
const BookingModel = require('../../booking/model/BookingModel');
const getBooks = async (res, req) => {
    const { userId } = req.body; 
    try {
        const userBooks = await BookingModel.find({userId : userId});
        const bookIds = userBooks.map((book) => book.bookId);
        
        res.status(200).json({
            bookIds
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
    
}




module.exports = {getBooks };