const mongoose = require('../../services/mongoose');

const BookingSchema = new mongoose.Schema({
    bookId :{
        type: String,
        required : true,
    },
    title :{
        type: String,
        required : true,
    },
    author : {
        type: String,
        required : true,
    },
    userName : {
        type: String,
        required : true,
    },
    userId:{
        type: String,
        required : true,
    },
    bookedDate : {
        type: Date,
        required : true,
    },
    returnDate :{
        type: Date,
        required : true,
    },
    isIssued :{
        type: Boolean,
        required : true,
    },
    fine : {
        type: Number,
    },
    isUpdated : {
        type: Boolean,
        default : false,
    },
    scope : {
        type: String,
        required : true,
    }
})


const BookingModel = mongoose.model('Bookings', BookingSchema);
module.exports = BookingModel;