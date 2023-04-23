
const BookingModel = require('../../booking/model/BookingModel');

const deleteBook = async (res,req) =>{
    try{
        const userBooks = await BookingModel.find({userId : userId});
        console.log(userBooks);
        BookingModel.deleteOne( {_id : req},function (err) {
            res.status(200).json({ message: 'Book deleted successfully' , status : 200 });
        });

    } catch (err){
        res.status(500).json({ message: 'Book not found' });
    }
   
    //For cases where value from params is received but doesn't match with any of the books   
}


module.exports = {deleteBook};