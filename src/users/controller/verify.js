const UserModel = require('../models/mongoose');

const verify = async (res, req) => {
    const uniqueString = req;
    await UserModel.findOne({"verification.randomnum" : uniqueString},(err, user) => {
        if (err) {
            console.log(err);
            } else {
            console.log(user);
            user.verification.isValid = true;
            user.save();
            res.send('verified');
            }
           });

}
module.exports = verify;
