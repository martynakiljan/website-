/** @format */

import React, { useRef, useState } from "react";
import "./form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import FormInput from "./FormInput";
import { config } from "../../utilis/formInputsArr";
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validateTextArea,
} from "../../utilis/validateInputs";
import { FormattedMessage } from "react-intl";
import { useForm } from "@formspree/react";

const Form = () => {
  const { fieldsConfig } = config;
  const defaultFormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState(defaultFormData);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

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
    setFormErrors({
      ...formErrors,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isNotEmptyForm() || !isValidForm()) {
      event.preventDefault();
    }
  };

  const isNotEmptyForm = () => {
    return Object.entries(formData).some(([k, v]) => v === "");
  };

  const isValidForm = () => {
    return Object.values(formErrors).every(
      (currentValue) => currentValue === ""
    );
  };

  const form = useRef();
  return (
    <>
      <h4 className="title form__title">
        {" "}
        <FormattedMessage id="contact-title"></FormattedMessage>
      </h4>
      <div className="form-container section" id="contact">
        <div className="form__inner">
          <div className="form__inner--inner">
            <form
              className="form"
              ref={form}
              action="https://formspree.io/f/mrgvrpnv"
              method="post"
            >
              {fieldsConfig.map(({ id, text, name }) => (
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
                onSubmit={(event) => handleSubmit(event)}
                className="btn-submit"
                type="submit"
                disabled={isNotEmptyForm() || !isValidForm()}
              >
                {" "}
                <FormattedMessage id="button-form"></FormattedMessage>
              </button>

              <div>
                {mailSent && <div className="sucsess">'success'</div>}
                {error && <div className="error">'error'</div>}
              </div>

              {/* {isFormCompleted && (
                <p className="form-confirmation">
                  <FormattedMessage id="form-confirmation"></FormattedMessage>
                </p>
              )} */}
            </form>

            <div className="form__meta">
              <div className="form__meta-item">
                <div className="form__meta-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="form__meta-text">
                  <a
                    className="form__meta-text form__meta-phone"
                    href="tel: +41779475177"
                  >
                    +41 77 947 51 77
                  </a>
                </div>
              </div>
              <div className="form__meta-item">
                <div className="form__meta-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="form__meta-text">
                  <a
                    className="form__meta-text form__meta-email"
                    href="mailto:info@zweimbau.ch"
                  >
                    info@zweimbau.ch
                  </a>
                </div>
              </div>
              <div className="form__meta-item">
                <div className="form__meta-icon">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <div className="form__meta-text">
                  <p className="form__meta-text form__meta-address">
                    Wydeweg 10
                  </p>
                  <p className="form__meta-text form__meta-address-street">
                    5620 Bremgarten
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
