/* -----------------------------------------------------------------------
   * @ description : This file defines the user schema for mongodb.
----------------------------------------------------------------------- */

import Sequelize from 'sequelize';
import sequelizeConnection from '../db';
// const User = UserModel(sequelizeConnection, Sequelize)

// const Schema = Mongoose.Schema;

// class UserClass {
//   static checkEmail(email) {
//     return this.findOne({ email });
//   }
//   static checkToken(token) {
//     return this.findOne({ 'loginToken.token': token });
//   }
//   static register(payload) {
//     return this(payload).save();
//   }
//   static login(email, password) {
//     return this.findOne({
//       email,
//       password
//     });
//   }
//   static onLoginDone(userId, payload, loginToken) {
//     let updateData = {
//       $push: { loginToken: { token: loginToken } },
//       $set: {
//         lastLogin: getTimeStamp(),
//         updatedAt: getTimeStamp()
//       }
//     };

//     return this.findByIdAndUpdate(userId, updateData, { new: true });
//   }
//   static logout(userId, token) {
//     let updateData = {
//       $set: {
//         'device.token': '',
//         updatedAt: getTimeStamp()
//       },
//       $pull: { loginToken: { token } }
//     };
//     return this.findByIdAndUpdate(userId, updateData);
//   }
// }
const User = sequelize.define("User", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

export default User;
