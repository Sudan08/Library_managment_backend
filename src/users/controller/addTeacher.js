const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/mongoose');

const addTeacher = async (res, req) => {
    const {
        password,
        email,
        userName,
        firstName,
        lastName,
    } = req;
    
    const newTeacher = new UserModel({
        password: Bcrypt.hashSync(password, 10),
        email,
        userName,
        firstName,
        lastName,
        scope : 'teacher',
    });

    try{
        const savedTeacher = await newTeacher.save();
        return res.status(201).json({savedTeacher});
    }
    catch(error){
        return res.status(400).json({
            status: 400,
            message: error,
        });
    }
};

module.exports = addTeacher;
    
