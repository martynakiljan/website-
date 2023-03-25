/** @format */

export const validateFirstName = (fname, setFormErrors) => {
  if (fname.length < 3) {
    setFormErrors("firstName", "first name must have at least 3 characters");
  } else {
    setFormErrors("firstName", "");
    return true;
  }
};

export const validateLastName = (lname, setFormErrors) => {
  if (lname.length < 3) {
    setFormErrors("lastName", "last name must have at least 3 characters");
  } else {
    setFormErrors("lastName", "");
    return true;
  }
};

export const validateEmail = (email, setFormErrors) => {
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    setFormErrors("email", "invalid email");
  } else {
    setFormErrors("email", "");
    return true;
  }
};

// export const validateTextArea (textarea, setFormErrors) => {
//   if (textarea.length < 3) {
//     setFormErrors("firstName", "Your Message cannot be empty");
//   } else {
//     setFormErrors("textarea", "");
//     return true;
//   }
// };
