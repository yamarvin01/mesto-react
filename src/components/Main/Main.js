import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-section">
            <img className="profile__avatar" alt="Аватарка" />
            <button
              onClick={this.props.onEditAvatar}
              className="profile__avatar-button"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <div className="profile__edit">
            <h1 className="profile__title"></h1>
            <button
              onClick={this.props.onEditProfile}
              className="profile__button-edit"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <p className="profile__subtitle"></p>
          <button
            onClick={this.props.onAddPlace}
            className="profile__button-add"
            type="button"
            aria-label="Кнопка добавления контента"
          ></button>
        </section>
        <section className="cards"></section>
      </main>
    );
  }
}
