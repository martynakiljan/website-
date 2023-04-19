/** @format */

export const config = {
  api: `${process.env.REACT_APP_API}`,
  fieldsConfig: [
    {
      id: "firstName",
      type: "text",
      name: "firstName",
      text: "First Name:",
    },
    {
      id: "lastName",
      type: "text",
      name: "lastName",
      text: "Last Name:",
    },
    {
      id: "email",
      type: "text",
      name: "email",
      text: "Email:",
    },
    {
      id: "message",
      type: "text",
      name: "message",
      text: "Your Message:",
    },
  ],
};

/** @format */