const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route POST api/users/register
// @desc Register User
// @access Public
router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
      });

      // hash users password before saving
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;
          newUser.save()
                 .then((user) => res.json(user))
                 .catch((err) => console.log({ user_register_err: err }))
        });
      });
    }
  });
});

// @route api/users/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', (req, res) => {
  // form validation
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({ email })
      .then((user) => {
        // check if user exists
        if (!user) {
          return res.status(404).json({ email_not_found: "Email not found" });
        }

        // check password
        bcrypt.compare(password, user.password).then((isMatch) => {
          if (isMatch) {
            // User match
            // create jwt payload
            const payload = {
              id: user.id,
              name: user.username,
            };

            // sign token
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 31556926 }, (err, token) => {
              res.json({ success: true, token: "Bearer " + token });
            });
          } else {
            return res.status(400).json({ password_incorrect: "Password Incorrect" });
          }
        });
      })
      .catch((err) => console.log({ login_err: err }));
});

module.exports = router;
