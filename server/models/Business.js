const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Business = new Schema({
  title: { type: String},
  pubDate: { type: String},
  contentSnippet: { type: String},
  links: [String],
  story: Boolean,
  articles: [{
    title: { type: String},
    subtitle: { type: String},
    link: { type: String},
    image: { type: String},
    source: { type: String},
    time: { type: String},
    stance: {type: Number},
    category: { type: String}
  }],
  timestamp: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Business', Business);