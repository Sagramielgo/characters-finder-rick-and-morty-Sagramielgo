//styles
import '../../stylesSheets/filters/FilterSpecies.scss';
//proptypes
import PropTypes from 'prop-types';

//FUNCTIONAL COMPONENT
const FilterSpecies = (props) => {
  //function that listens every change in input and by lifting pass the information tu upper component.
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'specie',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className="specie__title">Species:</label>
      <select
        className="specie__input"
        name="specie"
        id="specie"
        onChange={handleChange}
        value={props.specie}
      >
        <option value="all">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};

//proptypes
FilterSpecies.propTypes = {
  specie: PropTypes.string,
};

export default FilterSpecies;
