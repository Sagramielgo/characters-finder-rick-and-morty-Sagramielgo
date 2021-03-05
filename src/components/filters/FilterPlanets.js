import '../../stylesSheets/filters/FilterPlanets.scss';
const FilterPlanets = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'planet',
      value: ev.target.value,
    });
  };

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
  return (
    <fieldset className="checkContainer">
      <label className="checkTitle" htmlFor="planet">
        Select Character by planet:
      </label>
      <ul className="planetList">{planetsList}</ul>
    </fieldset>
  );
};
export default FilterPlanets;
