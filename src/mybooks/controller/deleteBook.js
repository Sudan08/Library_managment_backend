
const BookModel = require('../../books/model/bookModel');

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


module.exports = {deleteBook};