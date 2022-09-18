import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div class="page" name='page'>
      <Header />
      <Main />
      <Footer />

      <div class="popup popup_type_edit-avatar">
        <div class="popup__container popup__container_type_editAvatar">
          <h2 class="popup__title">Обновить аватар</h2>
          <button
            class="popup__button popup__button_type_close"
            type="button"
          ></button>
          <form
            class="popup__form popup__form_type_editAvatar"
            name="editAvatar"
            noValidate
          >
            <label class="popup__field" for="avatar-input">
              <input
                id="avatar-input"
                class="popup__input popup__input_type_avatar"
                type="url"
                name="avatar"
                placeholder="Ссылка на аватар"
                required
              />
              <span class="avatar-input-error popup__error"></span>
            </label>
            <button
              class="popup__button popup__button_type_submit"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_edit-profile">
        <div class="popup__container popup__container_type_form">
          <h2 class="popup__title">Редактировать профиль</h2>
          <button
            class="popup__button popup__button_type_close"
            type="button"
          ></button>
          <form
            class="popup__form popup__form_type_edit-profile"
            name="editProfile"
            noValidate
          >
            <label class="popup__field" for="name-input">
              <input
                id="name-input"
                class="popup__input popup__input_type_name"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span class="name-input-error popup__error"></span>
            </label>
            <label class="popup__field" for="about-input">
              <input
                id="about-input"
                class="popup__input popup__input_type_text"
                type="text"
                name="about"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span class="about-input-error popup__error"></span>
            </label>
            <button
              class="popup__button popup__button_type_submit"
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_type_add-card">
        <div class="popup__container popup__container_type_form">
          <h2 class="popup__title">Новое место</h2>
          <button
            class="popup__button popup__button_type_close"
            type="button"
          ></button>
          <form
            class="popup__form popup__form_type_add-card"
            name="newCard"
            noValidate
          >
            <label class="popup__field" for="place-input">
              <input
                id="place-input"
                class="popup__input popup__input_type_place"
                type="text"
                name="place"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span class="place-input-error popup__error"></span>
            </label>
            <label class="popup__field" for="link-input">
              <input
                id="link-input"
                class="popup__input popup__input_type_link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span class="link-input-error popup__error"></span>
            </label>
            <button
              class="popup__button popup__button_type_submit"
              type="submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>

      <div class="popup popup_dark popup_type_image">
        <div class="popup__container popup__container_type_image">
          <img class="popup__image" alt="Изображение" />
          <p class="popup__text"></p>
          <button
            class="popup__button popup__button_type_close"
            type="button"
          ></button>
        </div>
      </div>

      <div class="popup popup_type_deleteCard">
        <div class="popup__container popup__container_type_deleteCard">
          <h2 class="popup__title">Вы уверены?</h2>
          <button
            class="popup__button popup__button_type_close"
            type="button"
          ></button>
          <button class="popup__button popup__button_type_submit" type="submit">
            Да
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
