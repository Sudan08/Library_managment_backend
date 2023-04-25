const BookingModel = require('../model/BookingModel');

const getBooking = async (req, res) => {
    try {
        const booking = await BookingModel.find();
        res.status(200).json({
            booking
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const postBooking = async (req, res) => {
    try {
        const userId = req.params.id;
        const userBooks = await BookingModel.find({userId : userId});
        if (userBooks.length >= 2) {
            res.status(500).json({
                error: "You can't book more than 2 books"
            });
        }
        else{
        const booking = await BookingModel.create(req.body);
        res.status(200).json({
            booking
        });

        }
     
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const deleteBooking = async (req,res) =>{
    const id = req.params.id;
    try{
        BookingModel.deleteOne( {bookId : id},function (err) {
            res.status(200).json({ message: 'Booking deleted successfully' , status : 200 });
        });
    }
    catch (err){
        res.status(500).json({ message: 'Booking not found' });
    }
}   

module.exports = { getBooking, postBooking , deleteBooking};