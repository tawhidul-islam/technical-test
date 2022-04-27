export const createCourseValidation = ({ name, description }) => {
  const errors = {
    name: "",
    description: "",
  };

  const validation = [
    {
      phase: name.length < 3,
      fn: () =>
        (errors.name = "Course name is too short. It must be 3 char long!"),
    },

    {
      phase: !name,
      fn: () => (errors.name = "You should provide a valid course name!"),
    },

    {
      phase: description.length < 20,
      fn: () =>
        (errors.description =
          "Course name is too short. It must be 20 char long!"),
    },

    {
      phase: !description,
      fn: () =>
        (errors.description = "You should provide a valid course description!"),
    },
  ];

  validation.map(({ phase, fn }) => phase && fn());
  return errors;
};

export const updateCourseValidation = ({ name, description }) => {
  const errors = {
    name: "",
    description: "",
  };

  const validation = [
    {
      phase: name && name.length < 3,
      fn: () =>
        (errors.name = "Course name is too short. It must be 3 char long!"),
    },

    {
      phase: description && description.length < 20,
      fn: () =>
        (errors.description =
          "Course name is too short. It must be 20 char long!"),
    },
  ];

  validation.map(({ phase, fn }) => phase && fn());
  return errors;
};
