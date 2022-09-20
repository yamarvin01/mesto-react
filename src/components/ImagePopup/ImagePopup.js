import React from "react";

export default class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`popup popup_dark popup_type_${this.props.name} ${this.props.isOpen}`}
      >
        <div className="popup__container popup__container_type_image">
          <img
            className="popup__image"
            alt="Изображение"
            src={this.props.card.link}
          />
          <p className="popup__text">{this.props.card.name}</p>
          <button
            onClick={this.props.onClose}
            className="popup__button popup__button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>
    );
  }
}
