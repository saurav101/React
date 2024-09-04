import "./styles/custom_form_field_styles.css";

export default function CustomFormField({
  label,
  placeholder,
  type,
  value,
  cName,
  onChange,
}) {
  return (
    <div id="form-field">
      <p>
        <label id="label" for={cName}>
          {label}
        </label>
      </p>
      <input
        id="field"
        name={cName}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
