import '../../stylesSheets/filters/FilterInput.scss';
import PropTypes from 'prop-types';
const FilterInput = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.target.value.toUpperCase(),
    });
  };

  const handleReset = () => {
    props.handleReset();
  };
  return (
    <label className="form__label" htmlFor="searchField">
      <span
        className="icon iconInput fas fa-undo animate__animated animate__pulse animate__infinite"
        onClick={handleReset}
      ></span>
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
  handleReset: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilterInput;
