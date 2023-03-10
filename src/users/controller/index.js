const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const config = require('../../../config');
const schemes = require('../models/mongoose');



module.exports.signUp = async (res, req) => {
  const {
    password,
    email,
    username,
    firstName,
    lastName,
  } = req;

    const newUser = schemes.User({
      password: Bcrypt.hashSync(password, 10),
      email,
      username,
      firstName,
      lastName,
    });

    try {
      const savedUser = await newUser.save();

      const token = jwt.sign(
        { email, id: savedUser.id, username },
        config.API_KEY_JWT,
      );

      return res.status(201).json({ token });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
};
