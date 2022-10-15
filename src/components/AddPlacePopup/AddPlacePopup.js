import React from "react";
import Input from "../Input/Input.js";
import PopupWithForm from "../PopupWithForm/PopupWithForm.js";

export default function AddPlacePopup(props) {
  const [titleValue, setTitleValue] = React.useState('');
  const [urlValue, setUrlValue] = React.useState('');

  function handleTitleChange(evt) {
    setTitleValue(evt.target.value);
  }

  function handleUrlChange(evt) {
    setUrlValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddCard({
      title: titleValue,
      url: urlValue
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="addPlace"
      title="Новое место"
      btnText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <Input
        value={titleValue}
        onChange={handleTitleChange}
        name={"place"}
        type={"text"}
        placeholder={"Название"}
        minLength="2"
        maxLength="30"
      />
      <Input
        value={urlValue}
        onChange={handleUrlChange}
        name={"link"}
        type={"url"}
        placeholder={"Ссылка на картинку"}
      />
    </PopupWithForm>
  );
}
