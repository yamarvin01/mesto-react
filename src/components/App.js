import React, { createElement } from "react";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";
import PopupWithForm from "./PopupWithForm/PopupWithForm.js";
import ImagePopup from "./ImagePopup/ImagePopup.js";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false
    }
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  };

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  };

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  }

  closeAllPopups = ()=> {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false
    });
  }

  render() {
    return (
      <div className="page" name="page">
        <Header />
        <Main
          onEditAvatar={this.handleEditAvatarClick}
          onEditProfile={this.handleEditProfileClick}
          onAddPlace={this.handleAddPlaceClick}
        />
        <Footer />
        { this.state.isEditAvatarPopupOpen &&
          <PopupWithForm
            name="editAvatar"
            title="Обновить аватар"
            btnText="Сохранить"
            isOpen='popup_opened'
            onClose={this.closeAllPopups}
          />
        }
        { this.state.isEditProfilePopupOpen &&
          <PopupWithForm
            name="editProfile"
            title="Редактировать профиль"
            btnText="Сохранить"
            isOpen='popup_opened'
            onClose={this.closeAllPopups}
          />
        }
        { this.state.isAddPlacePopupOpen &&
          <PopupWithForm
            name="addPlace"
            title="Новое место"
            btnText="Создать"
            isOpen='popup_opened'
            onClose={this.closeAllPopups}
          />
        }
        <PopupWithForm
          name="deleteCard"
          title="Вы уверены?"
          btnText="Да"
          onClose={this.closeAllPopups}
        />

        <ImagePopup />

        <div className="popup popup_type_edit-avatar">
          <div className="popup__container popup__container_type_editAvatar">
            <h2 className="popup__title">Обновить аватар</h2>
            <button
              className="popup__button popup__button_type_close"
              type="button"
            ></button>
            <form
              className="popup__form popup__form_type_editAvatar"
              name="editAvatar"
              noValidate
            >
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
              <button
                className="popup__button popup__button_type_submit"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_edit-profile">
          <div className="popup__container popup__container_type_form">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button
              className="popup__button popup__button_type_close"
              type="button"
            ></button>
            <form
              className="popup__form popup__form_type_edit-profile"
              name="editProfile"
              noValidate
            >
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
              <button
                className="popup__button popup__button_type_submit"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_add-card">
          <div className="popup__container popup__container_type_form">
            <h2 className="popup__title">Новое место</h2>
            <button
              className="popup__button popup__button_type_close"
              type="button"
            ></button>
            <form
              className="popup__form popup__form_type_add-card"
              name="newCard"
              noValidate
            >
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
              <button
                className="popup__button popup__button_type_submit"
                type="submit"
              >
                Создать
              </button>
            </form>
          </div>
        </div>

        <div className="popup popup_dark popup_type_image">
          <div className="popup__container popup__container_type_image">
            <img className="popup__image" alt="Изображение" />
            <p className="popup__text"></p>
            <button
              className="popup__button popup__button_type_close"
              type="button"
            ></button>
          </div>
        </div>

        <div className="popup popup_type_deleteCard">
          <div className="popup__container popup__container_type_deleteCard">
            <h2 className="popup__title">Вы уверены?</h2>
            <button
              className="popup__button popup__button_type_close"
              type="button"
            ></button>
            <button
              className="popup__button popup__button_type_submit"
              type="submit"
            >
              Да
            </button>
          </div>
        </div>
      </div>
    );
  }
}
