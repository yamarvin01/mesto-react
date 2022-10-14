export default function Form(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`popup__form popup__form_type_${props.name}`}
      name={props.name}
      noValidate
    >
      {props.children}
    </form>
  );
}
