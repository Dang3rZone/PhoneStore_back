const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
  name: String,
  image: String,
  manufacturer: String,
  price: String,
  description: String,
});

module.exports = mongoose.model('phone', phoneSchema);
