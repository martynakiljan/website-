/** @format */

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";
import { inputs } from "../../utilis/formInputsArr";
import FormInput from "./FormInput";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validateTextArea,
} from "../../utilis/validateInputs";

const Form = () => {
  const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState(defaultFormData);

  const handleEdit = (name, value) => {
    validateInput(name, value);

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const validateInput = (name, value) => {
    switch (name) {
      case "firstName":
        validateFirstName(value, setFormErrorsWrapper);
        break;
      case "lastName":
        validateLastName(value, setFormErrorsWrapper);
        break;
      case "email":
        validateEmail(value, setFormErrorsWrapper);
        break;
      case "message":
        validateTextArea(value, setFormErrorsWrapper);
        break;
      default:
        break;
    }
  };

  const setFormErrorsWrapper = (name, value) => {
    console.log(name, value);
    setFormErrors({
      ...formErrors,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("handle submit");
    if (isValidForm()) {
      console.log("isValid");
      alert("ok");
    }
  };

  const isValidForm = () => {
    return Object.values(formErrors).every(
      (currentValue) => currentValue === ""
    );
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <>
      <div className="form-wave">
        <svg id="wave" viewBox="0 0 1440 490" version="1.1">
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(246, 206, 74, 1)" offset="0%" />
              <stop stop-color="rgba(246, 206, 74, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,294L40,285.8C80,278,160,261,240,236.8C320,212,400,180,480,155.2C560,131,640,114,720,138.8C800,163,880,229,960,253.2C1040,278,1120,261,1200,220.5C1280,180,1360,114,1440,147C1520,180,1600,310,1680,318.5C1760,327,1840,212,1920,187.8C2000,163,2080,229,2160,236.8C2240,245,2320,196,2400,196C2480,196,2560,245,2640,253.2C2720,261,2800,229,2880,179.7C2960,131,3040,65,3120,81.7C3200,98,3280,196,3360,228.7C3440,261,3520,229,3600,179.7C3680,131,3760,65,3840,106.2C3920,147,4000,294,4080,351.2C4160,408,4240,376,4320,334.8C4400,294,4480,245,4560,253.2C4640,261,4720,327,4800,302.2C4880,278,4960,163,5040,114.3C5120,65,5200,82,5280,73.5C5360,65,5440,33,5520,16.3C5600,0,5680,0,5720,0L5760,0L5760,490L5720,490C5680,490,5600,490,5520,490C5440,490,5360,490,5280,490C5200,490,5120,490,5040,490C4960,490,4880,490,4800,490C4720,490,4640,490,4560,490C4480,490,4400,490,4320,490C4240,490,4160,490,4080,490C4000,490,3920,490,3840,490C3760,490,3680,490,3600,490C3520,490,3440,490,3360,490C3280,490,3200,490,3120,490C3040,490,2960,490,2880,490C2800,490,2720,490,2640,490C2560,490,2480,490,2400,490C2320,490,2240,490,2160,490C2080,490,2000,490,1920,490C1840,490,1760,490,1680,490C1600,490,1520,490,1440,490C1360,490,1280,490,1200,490C1120,490,1040,490,960,490C880,490,800,490,720,490C640,490,560,490,480,490C400,490,320,490,240,490C160,490,80,490,40,490L0,490Z"
          />
        </svg>
      </div>
      <div className="form-container section" id="contact">
        <div className="form__inner">
          <h4 className="title form__title">Contact us!</h4>
          <div className="form__inner--inner">
            <form className="form" ref={form} onSubmit={sendEmail}>
              {inputs.map(({ id, text, name }) => (
                <FormInput
                  key={id}
                  text={text}
                  name={name}
                  value={formData.name}
                  formErrors={formErrors[name]}
                  onChange={(event) => handleEdit(name, event.target.value)}
                  id={id}
                />
              ))}

              <button
                onClick={(event) => handleSubmit()}
                className="btn-submit"
                type="submit"
                disabled={!isValidForm()}
              >
                {" "}
                SEND
              </button>
            </form>

            <div className="form__meta">
              <div className="form__meta-item">
                <div className="form__meta-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="form__meta-text">
                  <p className="form__meta-text form__meta-phone">
                    +41779953234
                  </p>
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
    </>
  );
};

export default Form;
