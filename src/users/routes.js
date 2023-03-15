const express = require('express');

const controller = require('./controller');
// const validateSchemas = require('../../middlewares/validateSchemas');
// const schemas = require('./utils/schemasValidation');

const router = express.Router();


router.post(
  '/api/v1/login',
  (req, res) => {
    controller.login(res, req.body);
  }
)

router.post(
  '/api/v1/signup',
  (req , res) => {
    controller.signUp(res, req.body);
  }
);



router.get(
  '/api/v1/verify/:uniqueString',
  (req ,res) =>{
    controller.verify(res, req.params.uniqueString);
  }
)

router.get(
  '/api/v1/signup',
  (req, res) => {
    res.send('hello');
  }
)

module.exports = router;
 