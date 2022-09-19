import React from "react";

export default class PopupWithForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="popup popup_type_edit-avatar popup_opened">
        <div className="popup__container popup__container_type_editAvatar">
          <h2 className="popup__title">{this.props.title}</h2>
          <button
            className="popup__button popup__button_type_close"
            type="button"
          ></button>
          <form
            className="popup__form popup__form_type_editAvatar"
            name="editAvatar"
            noValidate
          >
            <label className="popup__field" htmlFor="avatar-input">
              <input
                id="avatar-input"
                className="popup__input popup__input_type_avatar"
                type="url"
                name="avatar"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="avatar-input-error popup__error"></span>
            </label>
            <button
              className="popup__button popup__button_type_submit"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// popup_type_edit-avatar
// edit-avatar
// Обновить аватар
// Сохранить
