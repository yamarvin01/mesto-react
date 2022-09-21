import React from "react";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";
import { api } from "../utils/api.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userAvatar: "",
      userDescription: "",
      cards: [],
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isDeleteCardPopupOpen: false,
      isImagePopupOpen: false,
      selectedCard: {},
    };

    this.editAvatarFormChildren = (
      <label className="popup__field" htmlFor="avatar-input">
        <input
          id="avatar-input"
          className="popup__input popup__input_type_avatar"
          type="url"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <span className="avatar-input-error popup__error"></span>
      </label>
    );

    this.editProfileFormChildren = (
      <>
        <label className="popup__field" htmlFor="name-input">
          <input
            id="name-input"
            className="popup__input popup__input_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="name-input-error popup__error"></span>
        </label>
        <label className="popup__field" htmlFor="about-input">
          <input
            id="about-input"
            className="popup__input popup__input_type_text"
            type="text"
            name="about"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="about-input-error popup__error"></span>
        </label>
      </>
    );

    this.addPlaceFormChildren = (
      <>
        <label className="popup__field" htmlFor="place-input">
          <input
            id="place-input"
            className="popup__input popup__input_type_place"
            type="text"
            name="place"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="place-input-error popup__error"></span>
        </label>
        <label className="popup__field" htmlFor="link-input">
          <input
            id="link-input"
            className="popup__input popup__input_type_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="link-input-error popup__error"></span>
        </label>
      </>
    );
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        this.setState({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
          cards: cardsData,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  };

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  };

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  };

  handleCardClick = (card) => {
    this.setState({
      selectedCard: card,
      isImagePopupOpen: true,
    });
  };

  closeAllPopups = () => {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isDeleteCardPopupOpen: false,
      isImagePopupOpen: false,
      selectedCard: {},
    });
  };

  render() {
    return (
      <div className="page" name="page">
        <Header />
        <Main
          userName={this.state.userName}
          userDescription={this.state.userDescription}
          userAvatar={this.state.userAvatar}
          cards={this.state.cards}
          onEditAvatar={this.handleEditAvatarClick}
          onEditProfile={this.handleEditProfileClick}
          onAddPlace={this.handleAddPlaceClick}
          onCardClick={this.handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="editAvatar"
          title="Обновить аватар"
          btnText="Сохранить"
          children={this.editAvatarFormChildren}
          isOpen={this.state.isEditAvatarPopupOpen}
          onClose={this.closeAllPopups}
        />
        <PopupWithForm
          name="editProfile"
          title="Редактировать профиль"
          btnText="Сохранить"
          children={this.editProfileFormChildren}
          isOpen={this.state.isEditProfilePopupOpen}
          onClose={this.closeAllPopups}
        />
        <PopupWithForm
          name="addPlace"
          title="Новое место"
          btnText="Создать"
          children={this.addPlaceFormChildren}
          isOpen={this.state.isAddPlacePopupOpen}
          onClose={this.closeAllPopups}
        />
        <PopupWithForm
          name="deleteCard"
          title="Вы уверены?"
          btnText="Да"
          isOpen={this.state.isDeleteCardPopupOpen}
          onClose={this.closeAllPopups}
        />
        <ImagePopup
          name="image"
          isOpen={this.state.isImagePopupOpen}
          card={this.state.selectedCard}
          onClose={this.closeAllPopups}
        />
      </div>
    );
  }
}
