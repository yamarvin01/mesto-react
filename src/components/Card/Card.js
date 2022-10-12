import React from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardDeleteButtonClassName = `card__button card__button_type_delete ${
    isOwn ? "card__button_visible" : ""
  }`;
  const cardLikeButtonClassName = `card__button card__button_type_like ${
    isLiked ? "card__button_status_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img
        onClick={handleClick}
        className="card__image"
        alt={`Изображение ${props.card.name}`}
        src={props.card.link}
      />
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Кнопка лайк"
          ></button>
          <p className="card__like-text">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Кнопка удаления"
      ></button>
    </article>
  );
}
