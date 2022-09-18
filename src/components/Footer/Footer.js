// // Функциональный компонент Footer
// function Footer() {
//   return (
//     <footer class="footer">
//       <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
//     </footer>
//   );
// }

// export default Footer;



// Классовый компонент Footer
import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
    );
  }
}

export default Footer;
