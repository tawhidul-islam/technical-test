export const changePasswordValidation = ({
  oldPassword,
  newPassword,
  confirmPassword,
}) => {
  const errors = {
    oldPassword: "",
    newPassword: "",
  };

  const validation = [
    {
      phase: !oldPassword,
      fn: () =>
        (errors.oldPassword = "You should provide a valid old password!"),
    },
    {
      phase: oldPassword && oldPassword === newPassword,
      fn: () =>
        (errors.oldPassword = "Old password and new password are same!"),
    },
    {
      phase: newPassword.length < 6,
      fn: () => (errors.newPassword = "Password must be 6 character long!"),
    },
    {
      phase: !newPassword || !confirmPassword,
      fn: () => (errors.newPassword = "You should provide a valid credential"),
    },
    {
      phase: newPassword && confirmPassword && newPassword !== confirmPassword,
      fn: () => (errors.newPassword = "Password doesn't match"),
    },
  ];

  validation.map(({ phase, fn }) => phase && fn());
  return errors;
};
