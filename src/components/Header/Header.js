// // Функциональный компонент User
// import logo from '../../styles/images/logo-mesto.svg';

// function Header() {
//   return (
//     <header class="header">
//       <a class="header__link" href="#" target="_blank" rel="noopener">
//         <img class="header__logo" src={logo} alt="Логотип Mesto Russia" />
//       </a>
//     </header>
//   );
// }

// export default Header;



// Классовый компонент User
import React from "react";
import logo from "../../styles/images/logo-mesto.svg";

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <a class="header__link" href="#" target="_blank" rel="noopener">
          <img class="header__logo" src={logo} alt="Логотип Mesto Russia" />
        </a>
      </header>
    );
  }
}

export default Header;
