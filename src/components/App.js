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
      selectedCard: {}
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
          isOpen={this.state.isEditAvatarPopupOpen}
          onClose={this.closeAllPopups}
        />
        <PopupWithForm
          name="editProfile"
          title="Редактировать профиль"
          btnText="Сохранить"
          isOpen={this.state.isEditProfilePopupOpen}
          onClose={this.closeAllPopups}
        />
        <PopupWithForm
          name="addPlace"
          title="Новое место"
          btnText="Создать"
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
