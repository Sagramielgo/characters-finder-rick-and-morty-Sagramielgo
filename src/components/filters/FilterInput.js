//Styles
import '../../stylesSheets/filters/FilterInput.scss';

//proptypes
import PropTypes from 'prop-types';

//importe component
import ResetButton from '../ResetButton';
//functional component
const FilterInput = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value.toUpperCase(), //
    });
  };

  return (
    <label className="form__label" htmlFor="searchField">
      <ResetButton handleReset={props.handleReset} />
      <input
        className="form__input"
        type="text"
        name="searchField"
        id="searchField"
        placeholder="write a character name"
        onChange={handleChange}
        value={props.name}
      ></input>
    </label>
  );
};
FilterInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterInput;
