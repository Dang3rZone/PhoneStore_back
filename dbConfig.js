const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.HOST;

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database Connected Successfully'))
  .catch((err) => console.log(err));
