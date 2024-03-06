export function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email is required';
  }
  return error;
}

export function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Password is required';
  }
  return error;
}

export function validateName(value) {
  let error;
  if (!value) {
    error = 'Name is required';
  }
  return error;
}
