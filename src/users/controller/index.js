const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/mongoose');
// const config = require('../../../config');
const schemes = require('../models/mongoose');



module.exports.signUp = async (res, req) => {
  const {
    scope,
    password,
    email,
    userName,
    firstName,
    lastName,
  } = req;

    const newUser = new UserModel({
      password: Bcrypt.hashSync(password, 10),
      email,
      userName,
      firstName,
      lastName,
      scope,
    });

    try {
      const savedUser = await newUser.save();
      const token = jwt.sign(
        { email, id: savedUser.id, userName },
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
