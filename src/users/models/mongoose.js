const mongoose = require('../../services/mongoose');


const UserSchema = new mongoose.Schema({
    scope :{
      type: String,
      required : true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: String,
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verification: {
      randomnum:{
        type: String,
      },
      isValid:{
        type: Boolean,
      },
    }
  },
);







const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
