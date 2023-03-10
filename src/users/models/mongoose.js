const mongoose = require('../../services/mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    scope :{
      type: String,
      required : true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: String,
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
  },
);


// UserSchema.pre('save',
// async function(next) {
//   const user = this;
//   const hash = await bcrypt.hash(this.password, 10);

//   this.password = hash;
//   next();
//   }
// );


const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
