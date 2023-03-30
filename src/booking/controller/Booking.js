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
    // console.log(req.body);
    try {
        const booking = await BookingModel.create(req.body);
        res.status(200).json({
            booking
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

module.exports = { getBooking, postBooking };