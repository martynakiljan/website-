/** @format */

import { FormattedMessage } from "react-intl";

/** @format */
const FormInput = ({ type, text, id, name, value, onChange, formErrors }) => {
  return id === "message" ? (
    <>
      <label className="label">
        {" "}
        <FormattedMessage id={text}> /</FormattedMessage>{" "}
      </label>
      <textarea
        rows="5"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {formErrors && (
        <p class="form-error">
          {" "}
          <FormattedMessage id={formErrors}> /</FormattedMessage>
        </p>
      )}
    </>
  ) : (
    <>
      <label className="label">
        {" "}
        <FormattedMessage id={text}> /</FormattedMessage>{" "}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
      />
      {formErrors && (
        <p class="form-error">
          {" "}
          <FormattedMessage id={formErrors}> /</FormattedMessage>
        </p>
      )}
    </>
  );
};
export default FormInput;
