const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const User = new Schema({
  username: { type: String},
  googleId: { type: String},
  email: { type: String},
  article: [{
    _id: {type: String},
    timestamp: { type: Date, default: Date.now}
  }]
});  

//* Just for mockup : don't use this for actual app
// const User = new Schema({
//   username: { type: String},
//   googleId: { type: String},
//   email: { type: String},
//   article: [{
//     title: { type: String},
//     subtitle: { type: String},
//     link: { type: String},
//     image: { type: String},
//     source: { type: String},
//     time: { type: String},
//     stance: {type: Number},
//     category: { type: String},
//     date: { type: Date, default: Date.now, required: true }
//   }]
// });

module.exports = mongoose.model('User', User);

