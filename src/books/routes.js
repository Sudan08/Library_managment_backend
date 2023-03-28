const express = require('express');
const checkIfAuthenticated = require('../../middlewares/validateAuth');
const controller = require('./controller');


const router = express.Router();


router.get(
  '/api/v1/getBooks',
  (req, res) => {
    controller.getBooks(res, req.body);
  }
)

router.post(
  '/api/v1/addBook',
  (req , res) => {
    controller.postBook(res, req.body);
  }
);


router.get(
  '/api/v1/deleteBook/:id',
  (req ,res) =>{
    controller.deleteBook(res, req.params);
  }
)


router.update




module.exports = router;
 