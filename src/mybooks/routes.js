const express = require('express');
// const checkIfAuthenticated = require('../../middlewares/validateAuth');
const controller = require('./controller');


const router = express.Router();


router.get(
  '/api/v1/getBooks/:id',
  (req, res) => {
    controller.getBooks(res, req.params.id);
  }
)

router.delete(
  '/api/v1/deleteBook/:id',
  (req ,res) =>{
    controller.deleteBook(res, req.params.id);
  }
)





module.exports = router;
 