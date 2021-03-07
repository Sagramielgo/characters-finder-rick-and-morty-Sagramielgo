//styles
import '../../stylesSheets/filters/Filters.scss';

//proptypes
import PropTypes from 'prop-types';

//importe components
import FilterInput from './FilterInput';
import FilterSpecies from './FilterSpecies';
import FilterPlanets from './FilterPlanets';

//FUNCTIONAL COMPONENT
const Filters = (props) => {
  //function to avoid form default sending
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="app__filterSection animate__animated animate__fadeInDown">
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

//propTypes
Filters.propTypes = {
  handleFilter: PropTypes.func,
  handleReset: PropTypes.func,
  name: PropTypes.string,
  specie: PropTypes.string,
  planetOptions: PropTypes.array,
  planets: PropTypes.array,
};

export default Filters;
