export const loginForm = {
  Username: 'username',
  Password: 'password',
};

export const forgotPasswordForm = {
  Email: 'email',
  'New Password': 'password',
};

export const signUpForm = {
  Email: 'email',
  ...loginForm,
};
