export default function Input(props) {
  return (
    <label className="popup__field" htmlFor={props.name}>
      <input
        className={`popup__input popup__input_type_${props.name}`}
        name={props.name}
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        minLength=""
        maxLength=""
        required
      />
      <span className={`${props.name}-input-error popup__error`}></span>
    </label>
  );
}
