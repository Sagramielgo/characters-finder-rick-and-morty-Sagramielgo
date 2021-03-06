import logo from '../../images/logo.png';
import '../../stylesSheets/header/Header.scss';

import WelcomeBtn from './WelcomeBtn';

const Header = (props) => {
  return (
    <header className="header">
      <img
        src={logo}
        className="logo animate__animated animate__flip"
        alt="logo Rick and Morty"
      />
      <WelcomeBtn handleBtn={props.handleBtn} />
    </header>
  );
};
export default Header;
