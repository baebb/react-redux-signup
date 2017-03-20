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
  }
  return errors
};

export default validate;