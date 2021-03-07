//styles
import '../../stylesSheets/filters/FilterPlanets.scss';

//propTypes
import PropTypes from 'prop-types';

//FUNCTIONAL COMPONENT
const FilterPlanets = (props) => {
  //lifing function to get key and value of the property 'planet'
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'planet',
      value: ev.target.value,
    });
  };

  //variable that contains, after travels along with an array method lifting by props, each single element <li> with a label and checkbox input.
  const planetsList = props.planetOptions.map((planet, index) => {
    return (
      <li key={index} className="checkBox">
        <label className="labelCheck">
          <input
            className="inputCheck"
            type="checkbox"
            name="planet"
            value={planet}
            checked={props.planets.includes(planet)}
            onChange={handleChange}
          />
          {planet}
        </label>
      </li>
    );
  });

  //render a list with all items icluded in variable {planetsList}
  return (
    <fieldset className="checkContainer">
      <label className="checkTitle" htmlFor="planet">
        Select Character by planet:
      </label>
      <ul className="planetList">{planetsList}</ul>
    </fieldset>
  );
};

//propTypes
FilterPlanets.propTypes = {
  planets: PropTypes.array.isRequired,
};
export default FilterPlanets;
