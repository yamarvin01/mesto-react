import React from "react";
import Card from "../Card/Card.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-section">
            <img
              className="profile__avatar"
              alt="Аватар"
              src={this.props.userAvatar}
            />
            <button
              onClick={this.props.onEditAvatar}
              className="profile__avatar-button"
              type="button"
              aria-label="Кнопка редактирования аватара"
            ></button>
          </div>
          <div className="profile__edit">
            <h1 className="profile__title">{this.props.userName}</h1>
            <button
              onClick={this.props.onEditProfile}
              className="profile__button-edit"
              type="button"
              aria-label="Кнопка редактирования профиля"
            ></button>
          </div>
          <p className="profile__subtitle">{this.props.userDescription}</p>
          <button
            onClick={this.props.onAddPlace}
            className="profile__button-add"
            type="button"
            aria-label="Кнопка добавления карточки"
          ></button>
        </section>
        <section className="cards">
          {this.props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={this.props.onCardClick}
            />
          ))}
        </section>
      </main>
    );
  }
}
