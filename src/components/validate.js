//validator
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required field';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.fname) {
    errors.fname = 'Required field';
  }
  if (!values.lname) {
    errors.lname = 'Required field';
  }
  if (!values.phone) {
    errors.phone = 'Required field';
  } else if (!(/\b\d{4}[-\s]?\d{3}[-\s]?\d{3}\b/g).test(values.phone)) {
    errors.phone = 'Please enter a valid mobile phone number';
  }
  return errors
};

export default validate;