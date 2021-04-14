const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.HOST;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
