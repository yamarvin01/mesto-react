import React from "react";

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`popup popup_type_${this.props.name} ${this.props.isOpen}`}
      >
        <div
          className={`popup__container popup__container_type_${this.props.name}`}
        >
          <h2 className="popup__title">{this.props.title}</h2>
          <button
            onClick={this.props.onClose}
            className="popup__button popup__button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
          <form
            className={`popup__form popup__form_type_${this.props.name}`}
            name={this.props.name}
            noValidate
          >
            {this.props.name === "editAvatar" && (
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
            )}

            {this.props.name === "editProfile" && (
              <>
                <label className="popup__field" htmlFor="name-input">
                  <input
                    id="name-input"
                    className="popup__input popup__input_type_name"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    minLength="2"
                    maxLength="40"
                    required
                  />
                  <span className="name-input-error popup__error"></span>
                </label>
                <label className="popup__field" htmlFor="about-input">
                  <input
                    id="about-input"
                    className="popup__input popup__input_type_text"
                    type="text"
                    name="about"
                    placeholder="О себе"
                    minLength="2"
                    maxLength="200"
                    required
                  />
                  <span className="about-input-error popup__error"></span>
                </label>
              </>
            )}

            {this.props.name === "addPlace" && (
              <>
                <label className="popup__field" htmlFor="place-input">
                  <input
                    id="place-input"
                    className="popup__input popup__input_type_place"
                    type="text"
                    name="place"
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    required
                  />
                  <span className="place-input-error popup__error"></span>
                </label>
                <label className="popup__field" htmlFor="link-input">
                  <input
                    id="link-input"
                    className="popup__input popup__input_type_link"
                    type="url"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                  />
                  <span className="link-input-error popup__error"></span>
                </label>
              </>
            )}
            <button
              className="popup__button popup__button_type_submit"
              type="submit"
              aria-label="Сохранить"
            >
              {this.props.btnText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
