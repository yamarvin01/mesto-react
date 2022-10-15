export default function Form(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={`popup__form popup__form_type_${props.name}`}
      name={props.name}
      // noValidate
    >
      {props.children}
    </form>
  );
}
