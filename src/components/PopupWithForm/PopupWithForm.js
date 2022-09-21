import React from "react";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.js";
import ButtonClose from "../ButtonClose/ButtonClose.js";

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
          <ButtonClose onClose={this.props.onClose} />
          <form
            className={`popup__form popup__form_type_${this.props.name}`}
            name={this.props.name}
            noValidate
          >
            {this.props.children}

            <ButtonSubmit>{this.props.btnText}</ButtonSubmit>

          </form>
        </div>
      </div>
    );
  }
}
