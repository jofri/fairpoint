const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Article = new Schema({
  title: { type: String},
  subtitle: { type: String},
  link: { type: String},
  source: { type: String},
  stance: {type: Number},
  clicked: {type: Number, default: 1}
});



module.exports = mongoose.model('Article', Article);