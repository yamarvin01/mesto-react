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
            <img
              className="profile__avatar"
              alt="Аватарка"
              src={this.props.userAvatar}
            />
            <button
              onClick={this.props.onEditAvatar}
              className="profile__avatar-button"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <div className="profile__edit">
            <h1 className="profile__title">{this.props.userName}</h1>
            <button
              onClick={this.props.onEditProfile}
              className="profile__button-edit"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <p className="profile__subtitle">{this.props.userDescription}</p>
          <button
            onClick={this.props.onAddPlace}
            className="profile__button-add"
            type="button"
            aria-label="Кнопка добавления контента"
          ></button>
        </section>
        <section className="cards">
          {this.props.cards.map((card) => (
            <article className="card" key={card._id}>
              <img className="card__image" alt="Изображение" src={card.link} />
              <div className="card__info">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like">
                  <button
                    className="card__button card__button_type_like"
                    type="button"
                    aria-label="Кнопка лайк"
                  ></button>
                  <p className="card__like-text">{card.likes.length}</p>
                </div>
              </div>
              <button
                className="card__button card__button_type_delete"
                type="button"
                aria-label="Кнопка удаления"
              ></button>
            </article>
          ))}
        </section>
      </main>
    );
  }
}
