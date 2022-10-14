import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import Input from "../Input/Input.js";
import React from "react";

export default function EditAvatarPopup(props) {

  const myRef = React.useRef();

  function consoleLog() {
    console.log('myRef: ', myRef);
    console.log('myRef.current: ', myRef.current);
  }

  consoleLog();

  return (
    <PopupWithForm
      name="editAvatar"
      title="Обновить аватар"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <Input
        // value={value}
        // onChange={onChange}
        ref={myRef}
        name={"avatar"}
        type={"type"}
        placeholder={"Ссылка на аватар"}
      />
    </PopupWithForm>
  );
}
