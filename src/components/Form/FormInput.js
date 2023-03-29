/** @format */
const FormInput = ({ type, text, id, name, value, onChange, formErrors }) => {
  console.log(id, name);
  return id === "message" ? (
    <>
      <label className="label">{text} </label>
      <textarea
        rows="5"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {formErrors && <p class="form-error"> {formErrors}</p>}
    </>
  ) : (
    <>
      <label className="label">{text} </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
      />
      {formErrors && <p class="form-error"> {formErrors}</p>}
    </>
  );
};
export default FormInput;
