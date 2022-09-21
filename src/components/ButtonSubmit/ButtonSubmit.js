import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        className="popup__button popup__button_type_submit"
        type="submit"
        aria-label="Сохранить"
      >
        {this.props.children}
      </button>
    );
  }
}
