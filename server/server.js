require('dotenv').config()
var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose');
var passport = require('passport');
const cors = require('cors');
const port  = process.env.PORT || 8080;

const url = process.env.MONGO_URL;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


var userRouter = require('./routes/users');
var submitRouter = require("./routes/submitRouter");
var questionRouter = require("./routes/questionRouter");
var compileRouter = require("./routes/compileRouter");
var profileRouter = require("./routes/profileRouter");
var reportRouter = require("./routes/reportRouter");

var app = express();

// const allowedOrigins = ['http://127.0.0.1:5500/client/index.html'];

// const options = {
//   origin: allowedOrigins
// };

 app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/users', userRouter);
app.use('/questions', questionRouter);

app.use('/submit', submitRouter);
app.use('/compile', compileRouter);
app.use('/myprofile', profileRouter);
app.use('/myreport', reportRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


