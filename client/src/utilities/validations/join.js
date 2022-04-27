const isEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

export const signupValidation = ({
  name,
  email,
  password,
  confirmPassword,
}) => {
  const errors = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  // check name contain special character
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let specialError = false;
  specialError = specialChars.test(name);

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
      phase: !password || !confirmPassword,
      fn: () => (errors.password = "You should provide a valid credential"),
    },
    {
      phase: password && confirmPassword && password !== confirmPassword,
      fn: () => (errors.password = "Password doesn't match"),
    },
  ];

  validation.map(({ phase, fn }) => phase && fn());
  return errors;
};
