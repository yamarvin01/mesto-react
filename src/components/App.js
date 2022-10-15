import { api } from "../utils/api.js";
import { CurrentUserContext } from "./context/CurrentUserContext.js";
import AddPlacePopup from "./AddPlacePopup/AddPlacePopup.js";
import DeleteCardPopup from "./DeleteCardPopup/DeleteCardPopup.js";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup.js";
import Footer from "./Footer/Footer.js";
import Header from "./Header/Header.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";
import Main from "./Main/Main.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";
import React from "react";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({
    userName: "",
    userAvatar: "",
    userAbout: "",
    _id: "",
  });
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardList]) => {
        setCurrentUser({
          userName: userData.name,
          userAvatar: userData.avatar,
          userAbout: userData.about,
          _id: userData._id,
        });
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateAvatar(newAvatar) {
    api.editProfileAvatar(newAvatar.avatar)
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
    setDeleteCardPopupOpen(true);
    setSelectedCard(card);
  }

  function handleDeleteCardSubmit(evt) {
    evt.preventDefault();
    api.deleteCard(selectedCard._id)
      .then(() => {
        const newCardsArray = cards.filter((item) => {
          return item._id !== selectedCard._id;
        });
        setCards(newCardsArray);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(newCardData) {
    api.addNewCard(newCardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" name="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        ></EditAvatarPopup>
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        ></EditProfilePopup>
        <AddPlacePopup
          onAddCard={handleAddPlaceSubmit}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
        </AddPlacePopup>

        <DeleteCardPopup
          onDeleteCard={handleDeleteCardSubmit}
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
        >
        </DeleteCardPopup>

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
