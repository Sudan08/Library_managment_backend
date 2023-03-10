const express = require('express');

const controller = require('./controller/index');
// const validateSchemas = require('../../middlewares/validateSchemas');
const schemas = require('./utils/schemasValidation');

const router = express.Router();

router.post(
  '/api/v1/signup',
  (req , res) => {
    
    controller.signUp(res, req.body);
    res.send('Posted');
  }
);

router.get(
  '/api/v1/signup',
  (req, res) => {
    res.send('hello');
  }
)

module.exports = router;
 