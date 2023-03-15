const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/mongoose');


const login = async (res, req) => {
    const {
      scope,
      password,
      email,
    } = req;


    try {
     await UserModel.findOne({email:email},(err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user.verification.isValid === false) {
                res.json('Email not verified');
            }else{
            if (user.length === 0) {
                res.json('User does not exist');
            } else{
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (result) {
                            // const token = jwt.sign(
                            //     { email, id: user.id, userName: user.userName },
                            //     config.API_KEY_JWT,
                            // );
                            res.status(200).json({
                                status: 200,
                                message: 'Login Successful',
                                // token: token,
                                // user: user,
                            }); 
                        } else {
                            res.json('Incorrect password');
                        }
                    }
                })
            }
        }
        }
    })}
    catch (error) {
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
    
}

module.exports = login;