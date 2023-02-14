/** @format */

import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import "./form.scss";

const Form = () => {
  return (
    <div className="form">
      <div className="form__inner">
        <h4 className="title form__title">Contact us!</h4>
        <form>
          <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
          <MDBInput
            type="email"
            id="form4Example2"
            wrapperClass="mb-4"
            label="Email address"
          />
          <MDBInput
            wrapperClass="mb-4"
            textarea
            id="form4Example3"
            rows={4}
            label="Message"
          />

          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form4Example4"
            label="Send me a copy of this message"
            defaultChecked
          />

          <MDBBtn type="submit" className="mb-4" block>
            Sign in
          </MDBBtn>
        </form>
      </div>
    </div>
  );
};

export default Form;
