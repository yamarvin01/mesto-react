// // Функциональный компонент Main
// function Main() {

//   const handleEditAvatarClick = () => {
//     document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
//   }

//   const handleEditProfileClick = () => {
//     document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
//   }

//   const handleAddPlaceClick = () => {
//     document.querySelector('.popup_type_add-card').classList.add('popup_opened');
//   }

//   return (
//     <main className="content">
//       <section className="profile">
//         <div className="profile__avatar-section">
//           <img className="profile__avatar" alt="Аватарка" />
//           <button
//             onClick={handleEditAvatarClick}
//             className="profile__avatar-button"
//             type="button"
//             aria-label="Кнопка редактирования контента"
//           ></button>
//         </div>
//         <div className="profile__edit">
//           <h1 className="profile__title"></h1>{" "}
//           <button
//             onClick={handleEditProfileClick}
//             className="profile__button-edit"
//             type="button"
//             aria-label="Кнопка редактирования контента"
//           ></button>
//         </div>
//         <p className="profile__subtitle"></p>
//         <button
//           onClick={handleAddPlaceClick}
//           className="profile__button-add"
//           type="button"
//           aria-label="Кнопка добавления контента"
//         ></button>
//       </section>
//       <section className="cards"></section>
//     </main>
//   );
// }

// export default Main;

// Классовый компонент Main
import React from "react";

export default class Main extends React.Component {

  handleEditAvatarClick = () => {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  }

  handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-section">
            <img className="profile__avatar" alt="Аватарка" />
            <button
              onClick={this.handleEditAvatarClick}
              className="profile__avatar-button"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <div className="profile__edit">
            <h1 className="profile__title"></h1>
            <button
              onClick={this.handleEditProfileClick}
              className="profile__button-edit"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <p className="profile__subtitle"></p>
          <button
            onClick={this.handleAddPlaceClick}
            className="profile__button-add"
            type="button"
            aria-label="Кнопка добавления контента"
          ></button>
        </section>
        <section className="cards"></section>
      </main>
    );
  }
}
