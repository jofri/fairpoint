const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const User = new Schema({
  username: { type: String},
  googleId: { type: String},
  email: { type: String},
  photo: { type: String},
  settings: {
    newsletter: { type: String },
    newssettings: {
      UK: {type: Boolean, default: true},
      world: {type: Boolean, default: true},
      business: {type: Boolean, default: true},
      health: {type: Boolean, default: true},
      tech: {type: Boolean, default: true},
      sport: {type: Boolean, default: true},
      entertainment: {type: Boolean, default: true},
      science: {type: Boolean, default: true},
    }
  },
  article: [{
    _id: {type: String},
    title: {type: String},
    source: {type: String},
    stance: {type: Number},
    timestamp: { type: Date, default: Date.now}
  }]
});

module.exports = mongoose.model('User', User);

