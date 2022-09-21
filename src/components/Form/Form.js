import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        className={`popup__form popup__form_type_${this.props.name}`}
        name={this.props.name}
        noValidate
      >
        {this.props.children}
      </form>
    );
  }
}
