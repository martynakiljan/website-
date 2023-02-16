/** @format */

import React from "react";
import "./form.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [formStatus, setFormStatus] = React.useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="form">
      <div className="form__inner">
        <h4 className="title form__title">Contact us!</h4>
        <div className="container mt-5">
          <form onSubmit={onSubmit} className="local-bootstap">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
