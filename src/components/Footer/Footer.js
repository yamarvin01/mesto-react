// // Функциональный компонент Footer
// function Footer() {
//   return (
//     <footer className="footer">
//       <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
//     </footer>
//   );
// }

// export default Footer;



// Классовый компонент Footer
import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
    );
  }
}
