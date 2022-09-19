import React from "react";

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`popup popup_type_${this.props.name}`}>
        <div className={`popup__container popup__container_type_${this.props.name}`}>
          <h2 className="popup__title">{this.props.title}</h2>
          <button
            className="popup__button popup__button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
          <form
            className={`popup__form popup__form_type_${this.props.name}`}
            name={this.props.name}
            noValidate
          >
            {/* Здесь что-то будет */}

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

// popup_type_edit-avatar
// edit-avatar заменен на editAvatar
// Обновить аватар
// Сохранить
