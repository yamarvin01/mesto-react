import React from "react";
import Card from "../Card/Card";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { api } from "../../utils/api";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCardsArray = cards.filter((item) => {
          return item._id !== card._id;
        });
        setCards(newCardsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-section">
          <img
            className="profile__avatar"
            alt="Аватар"
            src={currentUser.userAvatar}
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-button"
            type="button"
            aria-label="Кнопка редактирования аватара"
          ></button>
        </div>
        <div className="profile__edit">
          <h1 className="profile__title">{currentUser.userName}</h1>
          <button
            onClick={props.onEditProfile}
            className="profile__button-edit"
            type="button"
            aria-label="Кнопка редактирования профиля"
          ></button>
        </div>
        <p className="profile__subtitle">{currentUser.userAbout}</p>
        <button
          onClick={props.onAddPlace}
          className="profile__button-add"
          type="button"
          aria-label="Кнопка добавления карточки"
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            card={card}
            key={card._id}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
