import React from "react";

export default class ButtonClose extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.props.onClose}
        className="popup__button popup__button_type_close"
        type="button"
        aria-label="Закрыть"
      >
      </button>
    );
  }
}
