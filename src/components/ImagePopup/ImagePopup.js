import React from "react";
import ButtonClose from "../ButtonClose/ButtonClose";

export default class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  // className={`popup popup_dark popup_type_${this.props.name} ${this.props.isOpen}`}>
  render() {
    return (
      <div className={this.props.isOpen ? 'popup popup_opened' : 'popup'}>
        <div className="popup__container popup__container_type_image">
          <img
            className="popup__image"
            alt={`Изображение ${this.props.card.name}`}
            src={this.props.card.link}
          />
          <p className="popup__text">{this.props.card.name}</p>

          <ButtonClose onClose={this.props.onClose} />
        </div>
      </div>
    );
  }
}
