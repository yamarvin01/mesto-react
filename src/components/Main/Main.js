// // Функциональный компонент Main
// function Main() {
//     return (
//       <main class="content">
//         <section class="profile">
//           <div class="profile__avatar-section">
//             <img class="profile__avatar" alt="Аватарка" />
//             <button class="profile__avatar-button"></button>
//           </div>
//           <div class="profile__edit">
//             <h1 class="profile__title"></h1>
//             <button
//               class="profile__button-edit"
//               type="button"
//               aria-label="Кнопка редактирования контента"
//             ></button>
//           </div>
//           <p class="profile__subtitle"></p>
//           <button
//             class="profile__button-add"
//             type="button"
//             aria-label="Кнопка добавления контента"
//           ></button>
//         </section>
//         <section class="cards"></section>
//       </main>
//     );
// }

// export default Main;

// Классовый компонент Main
import React from "react";

class Main extends React.Component {

  handleEditAvatarClick = () => {
    console.log(1);
  }

  handleEditProfileClick = () => {
    console.log(2);
  }

  handleAddPlaceClick = () => {
    console.log(3);
  }

  render() {
    return (
      <main class="content">
        <section class="profile">
          <div class="profile__avatar-section">
            <img class="profile__avatar" alt="Аватарка" />
            <button
              onClick={this.handleEditAvatarClick}
              class="profile__avatar-button"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <div class="profile__edit">
            <h1 class="profile__title"></h1>
            <button
              onClick={this.handleEditProfileClick}
              class="profile__button-edit"
              type="button"
              aria-label="Кнопка редактирования контента"
            ></button>
          </div>
          <p class="profile__subtitle"></p>
          <button
            onClick={this.handleAddPlaceClick}
            class="profile__button-add"
            type="button"
            aria-label="Кнопка добавления контента"
          ></button>
        </section>
        <section class="cards"></section>
      </main>
    );
  }
}

export default Main;
