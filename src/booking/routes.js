const express = require('express');
const {getBooking , postBooking , deleteBooking} = require('./controller/Booking.js');

const router = express.Router();

router.get(
    '/api/v1/getbooking',
    (req,res)=>{ 
        getBooking(req,res);
    }
);

router.post(
    '/api/v1/postbooking/:id',
    (req,res)=>{
        postBooking(req,res);
    }
);

router.delete(
    '/api/v1/deletebooking/:id',
    (req,res)=>{
        deleteBooking(req,res);
    }
);

module.exports = router;
        