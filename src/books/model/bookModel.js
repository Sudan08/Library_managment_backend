const mongoose = require('../../services/mongoose');


const BookSchema = new mongoose.Schema({
    title :{
        type: String,
        required : true,
    },
    author : {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required : true,
    },
    genre : {
        type: String,
        required : true,
    },
    volume :{
        type: Number,
    },
    availabiilty :{
        type: Boolean,
    },
    src :{
        type: String,
        required : true,
    }, 
 },
);





const BookModel = mongoose.model('Books', BookSchema);
module.exports = BookModel;
