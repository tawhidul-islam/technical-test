const isEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const addUserValidation = ({
  name,
  email,
  phone,
  cardId,
  dob,
  gender,
}) => {
  const errors = {
    name: "",
    phone: "",
    email: "",
    cardId: "",
    dob: "",
    gender: "",
  };

  // check name contain numeric value
  let nameError = false;
  name.split("").forEach((n) => {
    if (n !== " ") {
      if (!isNaN(n)) {
        nameError = true;
      }
    }
  });

  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let specialError = false;
  specialError = specialChars.test(name);

  let phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  let phoneNumberError = false;

  if (!phoneNumberRegex.test(phone)) {
    phoneNumberError = true;
  }

  const validation = [
    {
      phase: name.length < 3,
      fn: () => (errors.name = "Name is too short, it must be 3 char long!"),
    },
    {
      phase: !name,
      fn: () => (errors.name = "You should provide a valid name"),
    },
    {
      phase: nameError,
      fn: () => (errors.name = "Name must not be a numeric value!"),
    },
    {
      phase: specialError,
      fn: () => (errors.name = "Name must not contain any special character!"),
    },
    {
      phase: !isEmail(email),
      fn: () => (errors.email = "You should provide a valid email address"),
    },
    {
      phase: !cardId,
      fn: () => (errors.cardId = "You should provide a valid email card ID"),
    },
    {
      phase: !dob,
      fn: () => (errors.dob = "You should provide a valid date of birth"),
    },
    {
      phase: !gender,
      fn: () => (errors.gender = "You should provide a valid gender"),
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
