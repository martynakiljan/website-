/** @format */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.scss";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container" id="contact">
      <div className="form__inner">
        <h4 className="title form__title">Contact us!</h4>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label class="label">Name</label>
          <input className="input" type="text" name="user_name" />
          <label class="label">Email</label>
          <input className="input" type="email" name="user_email" />
          <label class="label">Message</label>
          <textarea class="text-area" name="message" />
          <input className="btn-submit" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Form;
