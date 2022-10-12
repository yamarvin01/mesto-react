import React from "react";
import Card from "../Card/Card.js";
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-section">
          <img
            className="profile__avatar"
            alt="Аватар"
            src={props.userAvatar}
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-button"
            type="button"
            aria-label="Кнопка редактирования аватара"
          ></button>
        </div>
        <div className="profile__edit">
          <h1 className="profile__title">{props.userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__button-edit"
            type="button"
            aria-label="Кнопка редактирования профиля"
          ></button>
        </div>
        <p className="profile__subtitle">{props.userAbout}</p>
        <button
          onClick={props.onAddPlace}
          className="profile__button-add"
          type="button"
          aria-label="Кнопка добавления карточки"
        ></button>
      </section>
      <section className="cards">
        {props.cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
