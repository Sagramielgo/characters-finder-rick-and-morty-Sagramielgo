import '../../stylesSheets/header/WelcomeBtn.scss';

const WelcomeBtn = (props) => {
  const handleBtn = () => {
    props.handleBtn();
  };

  return (
    <button
      className="header__btn animate__animated  animate__pulse animate__infinite"
      onClick={handleBtn}
    >
      Search your favorite
    </button>
  );
};
export default WelcomeBtn;
