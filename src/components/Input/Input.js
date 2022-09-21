import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className="popup__field" htmlFor={this.props.name}>
        <input
          className={`popup__input popup__input_type_${this.props.name}`}
          name={this.props.name}
          id={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          minLength=""
          maxLength=""
          required
        />
        <span className={`${this.props.name}-input-error popup__error`}></span>
      </label>
    );
  }
}
