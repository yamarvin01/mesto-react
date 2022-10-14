import React from "react";
import Form from "../Form/Form.js";
import ButtonClose from "../ButtonClose/ButtonClose.js";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.js";

export default function PopupWithForm(props) {
  return (
    <div
      className={
        props.isOpen
          ? `popup popup_type_${props.name} popup_opened`
          : `popup popup_type_${props.name}`
      }
    >
      <div
        className={`popup__container popup__container_type_${props.name}`}
      >
        <h2 className="popup__title">{props.title}</h2>
        <ButtonClose onClose={props.onClose} />
        <Form name={props.name}>
          {props.children}
          <ButtonSubmit>{props.btnText}</ButtonSubmit>
        </Form>
      </div>
    </div>
  );
}
