const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

// Config
require('dotenv').config();
const db = require('../config/keys').mongoURI;
const PORT = process.env.PORT || 5000;
// passport config
require('../config/passport')(passport);

const app = express();

// BodyParser middleware
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(bodyParser.json());

mongoose.connect(db, { useNewUrlParser: true })
        .then(() => console.log("MongoDB successfully connected"))
        .catch((err) => console.log({ mongo_conn_err: err }));

app.get('/', (req, res) => {
  res.send({msg: 'GET test successful'});
});

// passport middleware
app.use(passport.initialize());

// routes
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
