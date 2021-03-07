import '../../stylesSheets/header/WelcomeBtn.scss';

const WelcomeBtn = (props) => {
  //listener to pass information by props to upper component
  const handleBtn = () => {
    props.handleBtn();
  };

  return (
    <button
      className="header__btn animate__animated  animate__pulse animate__infinite"
      onClick={handleBtn}
    >
      Click to search
    </button>
  );
};
export default WelcomeBtn;
