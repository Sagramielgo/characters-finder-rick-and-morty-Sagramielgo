//Styles
import '../../stylesSheets/filters/FilterInput.scss';

//proptypes
import PropTypes from 'prop-types';

//imported component
import ResetButton from '../ResetButton';

//FUNCTIONAL COMPONENT
const FilterInput = (props) => {
  //listener to get key and value info when user write in
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value.toUpperCase(), //apply uppercase to compare the searching introduced with the characterCard info (array method applied in both)
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
