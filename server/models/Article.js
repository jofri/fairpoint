const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Article = new Schema({
  title: { type: String},
  subtitle: { type: String},
  link: { type: String},
  image: { type: String},
  source: { type: String},
  time: { type: String},
});



module.exports = mongoose.model('Article', Article);