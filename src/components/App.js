import { api } from "../utils/api.js";
import { CurrentUserContext } from "../context/CurrentUserContext.js";
import AddPlacePopup from "./AddPlacePopup/AddPlacePopup.js";
import DeleteCardPopup from "./DeleteCardPopup/DeleteCardPopup.js";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup.js";
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup.js";
import Footer from "./Footer/Footer.js";
import Header from "./Header/Header.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";
import Main from "./Main/Main.js";
import React from "react";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardList]) => {
        setCurrentUser(userData);
        setCards(cardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateAvatar(newAvatar) {
    api.editProfileAvatar(newAvatar.avatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(newUserData) {
    api.editProfile(newUserData)
      .then((userData) => {
        setCurrentUser(userData);
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
    setIsDeleteCardPopupOpen(true);
    setSelectedCard(card);
  }

  function handleCardDeleteSubmit(evt) {
    evt.preventDefault();
    api.deleteCard(selectedCard._id)
      .then(() => {
        // const newCardsArray = cards.filter((item) => {
        //   return item._id !== selectedCard._id;
        // });
        // setCards(newCardsArray);
        setCards((state) => {
          return state.filter((card) => {
            return card._id !== selectedCard._id;
          });
        });
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
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleClickClosePopup(evt) {
    if(evt.target.classList.contains("popup")) {
      closeAllPopups();
    }
  }

  // TODO: при нажатии Esc, попап с картинкой не закрывается
  function handleEscClosePopup(evt) {
    if(evt.key === "Escape") {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page" name="page"
        onClick={handleClickClosePopup}
        onKeyUp={handleEscClosePopup}
      >
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
          onDeleteCard={handleCardDeleteSubmit}
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
