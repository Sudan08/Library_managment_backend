const BookingModel = require('../model/BookingModel');

const getBooking = async (req, res) => {
    try {
        const booking = await BookingModel.find();
        const fineData = booking.map((item) => {
            const today = new Date();
            const returnDate = new Date(item.returnDate);
            const diffTime = (today - returnDate > 0) ? today - returnDate : 0 ;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays > 0) {
                item.fine = diffDays * 100;
            }
            else {
                item.fine = 0;
            }
            return item;
        });
        res.status(200).json({
            fineData
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};

const postBooking = async (req, res) => {
    const {scope , userId} = req.body;
    try {
        const userBooks = await BookingModel.find({userId : userId});
        if (userBooks.length >= 2 && scope === 'user') {
            res.status(500).json({
                error: "You can't book more than 2 books"
            });
        } else if(userBooks.length >= 4 && scope === 'teacher'){
            res.status(500).json({
                error: "You can't book more than 4 books"
            });
        }
        else{
        const someDate = new Date();
        if (scope === 'user'){
            req.body.returnDate = someDate.setDate(someDate.getDate() + 14);  
        }else {
            req.body.returnDate = someDate.setDate(someDate.getDate() + 20);
        }
        req.body.fine = 0; 
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
        BookingModel.deleteOne( {_id : id},function (err) {
            res.status(200).json({ message: 'Booking deleted successfully' , status : 200 });
        });
    }
    catch (err){
        res.status(500).json({ message: 'Booking not found' });
    }
}   

const updateBooking = async (req,res) =>{
    const id = req.params.id;
    try{
        const data = await BookingModel.findByIdAndUpdate(id, {isIssued : true})
        res.status(200).json({ message: 'Booking updated successfully' , status : 200 });
    }
    catch (err){
        res.status(500).json({ error : error.message });
    }
}
module.exports = { getBooking, postBooking , deleteBooking , updateBooking};