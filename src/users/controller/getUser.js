const UserModel = require('../models/mongoose');

const getUser = async (res, req) => {
    try{
        const user = await UserModel.find();
        res.status(200).json({
            status: 'success',
            data: user.length,
        });
    }
    catch{
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}
module.exports = getUser;
