const express = require('express');
const {getBooking , postBooking} = require('./controller/Booking.js');

const router = express.Router();

router.get(
    '/api/v1/getbooking',
    (req,res)=>{
        getBooking(req,res);
    }
);

router.post(
    '/api/v1/postbooking',
    (req,res)=>{
        postBooking(req,res);
    }
);

module.exports = router;
        