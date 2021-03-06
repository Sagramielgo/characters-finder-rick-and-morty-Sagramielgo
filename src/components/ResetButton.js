//Styles
import '../stylesSheets/ResetButton.scss';

//proptypes
import PropTypes from 'prop-types';

//FUNCTIONAL COMPONENT
const ResetButton = (props) => {
  //listener no click and pass the information by props to upper component, in this case to App (contains useState needed)
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <span
      className="icon iconInput fas fa-undo animate__animated animate__pulse animate__infinite"
      onClick={handleReset}
    ></span>
  );
};

ResetButton.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default ResetButton;
