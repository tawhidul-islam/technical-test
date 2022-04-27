export const profileValidation = (phone) => {
  const errors = {
    phone: "",
  };

  // Validate phone number
  let phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  let phoneNumberError = false;

  if (!phoneNumberRegex.test(phone) && phone) {
    phoneNumberError = true;
  }

  const validation = [
    {
      phase: phoneNumberError,
      fn: () =>
        (errors.phone =
          "Invalid phone number. Make sure you are using country code!"),
    },
  ];

  validation.map(({ phase, fn }) => phase && fn());
  return errors;
};
