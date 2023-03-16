const express = require('express');

const controller = require('./controller');
// const validateSchemas = require('../../middlewares/validateSchemas');
// const schemas = require('./utils/schemasValidation');

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





module.exports = router;
 