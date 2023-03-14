const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/mongoose');


const login = async (res, req) => {
    const {
      scope,
      password,
      email,
    } = req;

    password = Bcrypt.hashSync(password, 10);

    try {
     await UserModel.findOne({email:email},(err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user.length === 0) {
                res.send('User does not exist');
            } else{
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (result) {
                            const token = jwt.sign(
                                { email, id: user.id, userName: user.userName },
                                config.API_KEY_JWT,
                            );
                            res.send(token);
                        } else {
                            res.send('Incorrect password');
                        }
                    }
                })
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