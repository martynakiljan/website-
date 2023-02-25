/** @format */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";

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
        <div className="form__inner--inner">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <label class="label">Name</label>
            <input className="input" type="text" name="user_name" />
            <label class="label">Email</label>
            <input className="input" type="email" name="user_email" />
            <label class="label">Message</label>
            <textarea class="text-area" name="message" />
            <input className="btn-submit" type="submit" value="Send" />
          </form>

          <div className="form__meta">
            <div className="form__meta-item">
              <div className="form__meta-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="form__meta-text">
                <p className="form__meta-text form__meta-phone">+41779953234</p>
                <p className="form__meta-text form__meta-email">
                  company@wp.pl
                </p>
              </div>
            </div>
            <div className="form__meta-item">
              <div className="form__meta-icon">
                <FontAwesomeIcon icon={faHouse} />
              </div>
              <div className="form__meta-text">
                <p className="form__meta-text form__meta-address">
                  Zürcherstrasse 23
                </p>
                <p className="form__meta-text form__meta-address-street">
                  45-345 Zürich
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
