import React from "react";

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  // <div className={`popup popup_type_${this.props.name} ${this.props.isOpen} ? popup_opened : ''`}>
  render() {
    return (
      <div className={this.props.isOpen ? "popup popup_opened" : "popup"}>
        <div className={`popup__container popup__container_type_${this.props.name}`}>
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
            {this.props.children}

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
