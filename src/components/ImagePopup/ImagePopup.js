import React from "react";
import ButtonClose from "../ButtonClose/ButtonClose";

export default class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.isOpen
            ? `popup popup_dark popup_type_${this.props.name} popup_opened`
            : `popup popup_dark popup_type_${this.props.name}`
        }
      >
        <div className="popup__container popup__container_type_image">
          <ButtonClose onClose={this.props.onClose} />
          <img
            className="popup__image"
            alt={`Изображение ${this.props.card.name}`}
            src={this.props.card.link}
          />
          <p className="popup__text">{this.props.card.name}</p>
        </div>
        {this.props.children}
      </div>
    );
  }
}
