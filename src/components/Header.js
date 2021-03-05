import logo from '../images/logo.png';
import '../stylesSheets/Header.scss';

const Header = (props) => {
  const handleBtn = () => {
    props.handleBtn();
  };

  return (
    <header className="header">
      <img
        src={logo}
        className="logo animate__animated animate__flip"
        alt="logo Rick and Morty"
      />
      <button
        className="header__btn animate__animated animate__zoomIn"
        onClick={handleBtn}
      >
        Search your favorite
      </button>
    </header>
  );
};
export default Header;
