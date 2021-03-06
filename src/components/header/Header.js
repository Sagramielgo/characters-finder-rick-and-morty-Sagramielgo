//styles
import '../../stylesSheets/header/Header.scss';

//imported image
import logo from '../../images/logo.png';

//importe component
import WelcomeBtn from './WelcomeBtn';

//FUNCTIONAL COMPONENT
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
