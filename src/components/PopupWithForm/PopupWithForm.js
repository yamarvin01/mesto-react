import React from "react";
import Form from "../Form/Form.js";
import ButtonClose from "../ButtonClose/ButtonClose.js";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit.js";

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
          <Form name={this.props.name}>
            {this.props.children}
            <ButtonSubmit>{this.props.btnText}</ButtonSubmit>
          </Form>
        </div>
      </div>
    );
  }
}
