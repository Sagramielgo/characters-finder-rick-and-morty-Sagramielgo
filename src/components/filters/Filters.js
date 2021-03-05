import FilterInput from './FilterInput';
import FilterSpecies from './FilterSpecies';
import FilterPlanets from './FilterPlanets';
import '../../stylesSheets/filters/Filters.scss';
import logo from '../../images/logo.png';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <img
        src={logo}
        className="logo animate__animated animate__flip"
        alt="logo Rick and Morty"
      />
      <form onSubmit={handleSubmit} className="formContainer">
        <fieldset className="formContainer__wrapper">
          <FilterInput
            handleFilter={props.handleFilter}
            handleReset={props.handleReset}
            name={props.name}
          />
          <FilterSpecies
            handleFilter={props.handleFilter}
            specie={props.specie}
          />
        </fieldset>
        <FilterPlanets
          handleFilter={props.handleFilter}
          planetOptions={props.planetOptions}
          planets={props.planets}
        />
      </form>
    </section>
  );
};
export default Filters;
