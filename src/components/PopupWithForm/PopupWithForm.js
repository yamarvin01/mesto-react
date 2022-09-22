import React from "react";
import ButtonClose from "../ButtonClose/ButtonClose.js";

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={
          this.props.isOpen
            ? `popup popup_type_${this.props.name} popup_opened`
            : `popup popup_type_${this.props.name}`
        }
      >
        <div className={`popup__container popup__container_type_${this.props.name}`} >
          <h2 className="popup__title">{this.props.title}</h2>
          <ButtonClose onClose={this.props.onClose} />
          {this.props.children}
        </div>
      </div>
    );
  }
}
