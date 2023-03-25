/** @format */
const FormInput = ({ type, text, id, name, value, onChange, formErrors }) => {
  return (
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
