import React from "react";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";
import Input from "./Input/Input.js";
import { api } from "../utils/api.js";
import { CurrentUserContext } from "./context/CurrentUserContext.js";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({
    userName: "",
    userAvatar: "",
    userAbout: "",
    _id: "",
  });
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser({
          userName: userData.name,
          userAvatar: userData.avatar,
          userAbout: userData.about,
          _id: userData._id,
        });
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

  function handleUpdateUser(newUserData) {
    api.editProfile(newUserData)
      .then((userData) => {
        setCurrentUser({
          userName: userData.name,
          userAvatar: userData.avatar,
          userAbout: userData.about,
          _id: userData._id,
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" name="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          // onSubmit={onSubmitEditAvatar}
          name="editAvatar"
          title="Обновить аватар"
          btnText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <Input
            name={"avatar"}
            type={"type"}
            placeholder={"Ссылка на аватар"}
          />
        </PopupWithForm>

        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        ></EditProfilePopup>

        <PopupWithForm
          // onSubmit={onSubmitAddPlace}
          name="addPlace"
          title="Новое место"
          btnText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <Input
            name={"place"}
            type={"text"}
            placeholder={"Название"}
            minLength="2"
            maxLength="30"
          />
          <Input
            name={"link"}
            type={"url"}
            placeholder={"Ссылка на картинку"}
          />
        </PopupWithForm>
        <PopupWithForm
          // onSubmit={onSubmitDeleteCard}
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
    </CurrentUserContext.Provider>
  );
}
