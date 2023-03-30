
const BookModel = require('../model/bookModel');


const postBook = async (res, req) => {
    console.log(req);
    try {
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

const updateBook = async (res, req) => {
    const { id } = req.params;
    const { title, genre, author, description , booked } = req.body;
    
    try {
        const books = await BookModel.findOneAndUpdate({ _id : id }, { 
            title: title,
            genre : genre,
            author : author,
            description : description,
         });
        res.status(200).json({
            books
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

const updateBooking = async (res, req) => {
    const { id } = req.params;
    const { booked } = req.body;
    try {
        const books  = await BookModel.findOneAndUpdate({_id:id},{
            booked : booked
        });
        res.status(200).json({
            books
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
}
}   




module.exports = {postBook , updateBook ,updateBooking};