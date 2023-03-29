
const BookModel = require('../model/bookModel');


const postBook = async (res, req) => {
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
    console.log(req.body);
    const { title, genre, author, description } = req.body;
    console.log(title);
    
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

module.exports = {postBook , updateBook};