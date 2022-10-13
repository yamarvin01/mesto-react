import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import { CurrentUserContext } from "../context/CurrentUserContext.js";

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [nameValue, setNameValue] = React.useState("");
  const [aboutValue, setAboutValue] = React.useState("");

  React.useEffect(() => {
    setNameValue(currentUser.name);
    setAboutValue(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setNameValue(evt.target.value);
  }

  function handleAboutChange(evt) {
    setAboutValue(evt.target.value);
  }

  return (
    <PopupWithForm
      name="editProfile"
      title="Редактировать профиль"
      btnText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label className="popup__field" htmlFor="name">
        <input
          onChange={handleNameChange}
          value={nameValue || ''}
          className="popup__input popup__input_type_name"
          name="name"
          id="name"
          type="text"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="about-input-error popup__error"></span>
      </label>
      <label className="popup__field" htmlFor="about">
        <input
          onChange={handleAboutChange}
          value={aboutValue || ''}
          className="popup__input popup__input_type_about"
          name="about"
          id="about"
          type="text"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="about-input-error popup__error"></span>
      </label>
    </PopupWithForm>
  );
}
