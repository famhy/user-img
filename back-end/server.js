const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MongoUrl = 'mongodb://localhost:27017/user-img';
const user = require('./router/User');


app.use(bodyParser.json());

const port = process.env.PORT || 5000;
mongoose
  .connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err,));





app.use(user);


app.listen(port, (err) => {
  if (err) console.log('connection to server failed');
  console.log('connected on port 5000');
});
