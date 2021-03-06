//Styles
import '../stylesSheets/ResetButton.scss';

//proptypes
import PropTypes from 'prop-types';

//component
const ResetButton = (props) => {
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
