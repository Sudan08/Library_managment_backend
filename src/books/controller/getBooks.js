
const BookModel = require('../model/bookModel');
const checkIfAuthenticated = require('../../../middlewares/validateAuth');

const getBooks = async (res, req) => {
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

const getSingleBook = async (req,res,next) =>{
    const { id: bookId } = req.params;
    const singleBook = await Book.findOne({ _id: bookId });
    //For cases where value from params is received but doesn't match with any of the books
    if (!singleBook) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ singleBook });
}

const deleteBook = async (res,req) =>{
    try{
        BookModel.deleteOne( {_id : req},function (err) {
            res.status(200).json({ message: 'Book deleted successfully' , status : 200 });
        });

    } catch (err){
        res.status(500).json({ message: 'Book not found' });
    }
   
    //For cases where value from params is received but doesn't match with any of the books   
}

module.exports = {getBooks , getSingleBook , deleteBook};