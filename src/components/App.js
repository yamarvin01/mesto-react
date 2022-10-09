import React from "react";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";
import Input from "./Input/Input.js";
import { api } from "../utils/api.js";

export default function App() {
  const [userName, setUserName] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [userAbout, setUserAbout] = React.useState('');

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserAvatar(userData.avatar);
        setUserAbout(userData.about);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page" name="page">
      <Header />
      <Main
        userName={userName}
        userAbout={userAbout}
        userAvatar={userAvatar}
        cards={cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="editAvatar"
        title="Обновить аватар"
        btnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <Input name={"avatar"} type={"type"} placeholder={"Ссылка на аватар"} />
      </PopupWithForm>
      <PopupWithForm
        name="editProfile"
        title="Редактировать профиль"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <Input name={"name"} type={"text"} placeholder={"Имя"} minLength={"2"} maxLength={"40"} />
        <Input name={"about"} type={"text"} placeholder={"О себе"} minLength={"2"} maxLength={"200"} />
      </PopupWithForm>
      <PopupWithForm
        name="addPlace"
        title="Новое место"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <Input name={"place"} type={"text"} placeholder={"Название"} minLength="2" maxLength="30" />
        <Input name={"link"} type={"url"} placeholder={"Ссылка на картинку"} />
      </PopupWithForm>
      <PopupWithForm
        name="deleteCard"
        title="Вы уверены?"
        btnText="Да"
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup
        name="image"
        isOpen={isImagePopupOpen}
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}
