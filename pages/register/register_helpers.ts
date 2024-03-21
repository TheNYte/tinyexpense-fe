export function validateEmail(value: string | undefined) {
  let error;
  if (!value) {
    error = 'Email is required';
  } /*else if (!value.includes('@')) {
    error = 'Wrong email format';
  }*/
  return error;
}

export function validatePassword(value: string | undefined) {
  let error;
  if (!value) {
    error = 'Password is required';
  }
  return error;
}

export function validateName(value: string | undefined) {
  let error;
  if (!value) {
    error = 'Name is required';
  }
  return error;
}
