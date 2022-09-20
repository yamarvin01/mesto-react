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
      isImagePopupOpen: false,
      selectedCard: {},
    };
  }

  componentDidMount() {
    api
      .getUserInfo()
      .then((userData) => {
        this.setState({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cardsData) => {
        this.setState({ cards: cardsData });
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
      isImagePopupOpen: false,
      selectedCard: null,
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
        {this.state.isEditAvatarPopupOpen && (
          <PopupWithForm
            name="editAvatar"
            title="Обновить аватар"
            btnText="Сохранить"
            isOpen="popup_opened"
            onClose={this.closeAllPopups}
          />
        )}
        {this.state.isEditProfilePopupOpen && (
          <PopupWithForm
            name="editProfile"
            title="Редактировать профиль"
            btnText="Сохранить"
            isOpen="popup_opened"
            onClose={this.closeAllPopups}
          />
        )}
        {this.state.isAddPlacePopupOpen && (
          <PopupWithForm
            name="addPlace"
            title="Новое место"
            btnText="Создать"
            isOpen="popup_opened"
            onClose={this.closeAllPopups}
          />
        )}
        <PopupWithForm
          name="deleteCard"
          title="Вы уверены?"
          btnText="Да"
          onClose={this.closeAllPopups}
        />

        {this.state.isImagePopupOpen && (
          <ImagePopup
            name="image"
            isOpen="popup_opened"
            card={this.state.selectedCard}
            onClose={this.closeAllPopups}
          />
        )}
      </div>
    );
  }
}
