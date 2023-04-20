/** @format */

export const validateFirstName = (fname, setFormErrors) => {
  if (fname.length < 3) {
    setFormErrors("firstName", "form-label-1-error");
  } else {
    setFormErrors("firstName", "");
    return true;
  }
};

export const validateLastName = (lname, setFormErrors) => {
  if (lname.length < 3) {
    setFormErrors("lastName", "form-label-2-error");
  } else {
    setFormErrors("lastName", "");
    return true;
  }
};

export const validateEmail = (email, setFormErrors) => {
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    setFormErrors("email", "form-label-3-error");
  } else {
    setFormErrors("email", "");
    return true;
  }
};

export const validateTextArea = (message, setFormErrors) => {
  if (message.length < 3) {
    setFormErrors("message", "form-label-4-error");
  } else {
    setFormErrors("message", "");
    return true;
  }
};
