
// Require mongoose
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// Create new schema
const SampleModel = new Schema({
  title: String,
  body: String,
}, { timestamps: true }); // Set automatic timestamp (created_at & updated_at) for every document

module.exports = mongoose.model('SampleModel', SampleModel);
