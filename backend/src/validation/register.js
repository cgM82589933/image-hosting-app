const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = validateRegisterInput = (data) => {
  let errors = {};

  // convert empty values to empty string in prep for Validator
  data.username = !isEmpty(data.username) ? data.username : '';
  data.first_name = !isEmpty(data.first_name) ? data.first_name : '';
  data.last_name = !isEmpty(data.last_name) ? data.last_name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password_ver = !isEmpty(data.password_ver) ? data.password_ver : '';

  // username checks
  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required';
  }

  // name checks
  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = 'First name field is required';
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = 'Last name field is required';
  }

  // other checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(data.password_ver)) {
    errors.password_ver = 'Password confirmation field required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must contain between 6 and 30 characters';
  }

  if (!Validator.equals(data.password, data.password_ver)) {
    errors.password_ver = 'Passwords do not match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
