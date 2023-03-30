const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/mongoose');

const sendEmail = require('./sendMail');


const randString = () => {
    const len= 8
    let randStr = ''
    for (let i = 0; i < len; i++) {
      const ch = Math.floor(Math.random() * 10+1)
      randStr += ch
    }
  return randStr
}

const signUp = async (res, req) => {
  const {
    password,
    email,
    userName,
    firstName,
    lastName,
  } = req;

  const uniqueString = randString();
  const isValid = false;
  
    const newUser = new UserModel({
      password: Bcrypt.hashSync(password, 10),
      email,
      userName,
      firstName,
      lastName,
      scope : 'user',
      verification:{
        randomnum: uniqueString,
        isValid,
      }
    });
    
    try {
      const savedUser = await newUser.save();
      sendEmail(email , uniqueString);
      const token = jwt.sign(
        { email, id: savedUser.id, userName },
        config.API_KEY_JWT,
        { expiresIn: config.TOKEN_EXPIRES_IN },
      );

      return res.status(201).json({ token });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
};

module.exports = signUp;