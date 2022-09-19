import React from "react";

export default class ImagePopup extends React.Component {

  render() {
    return (
      <div className="popup popup_dark popup_type_image">
        <div className="popup__container popup__container_type_image">
          <img className="popup__image" alt="Изображение" />
          <p className="popup__text"></p>
          <button
            className="popup__button popup__button_type_close"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </div>
    );
  }
}
