const mongoose = require('../../services/mongoose');


const BookSchema = new mongoose.Schema({
    title :{
        type: String,
        required : true,
        unique : true,
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
    src : {
        type: String,
    }
 },
);





const BookModel = mongoose.model('Books', BookSchema);
module.exports = BookModel;
