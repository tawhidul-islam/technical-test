const isEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const updateProfileValidation = ({ name, email, phone }) => {
  const errors = {
    name: "",
    email: "",
    phone: "",
  };

  let phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  let phoneNumberError = false;

  if (!phoneNumberRegex.test(phone) && phone) {
    phoneNumberError = true;
  }

  // check name contain numeric value
  let nameError = false;
  name.split("").forEach((n) => {
    if (n !== " ") {
      if (!isNaN(n)) {
        nameError = true;
      }
    }
  });

  // check name contain special character
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let specialError = false;
  specialError = specialChars.test(name);

  const validation = [
    {
      phase: name && name.length < 3,
      fn: () => (errors.name = "Name is too short, it must be 3 char long!"),
    },
    {
      phase: name && nameError,
      fn: () => (errors.name = "Name must not be a numeric value!"),
    },
    {
      phase: name && specialError,
      fn: () => (errors.name = "Name must not contain any special character!"),
    },
    {
      phase: email && !isEmail(email),
      fn: () => (errors.email = "You should provide a valid email address"),
    },
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
