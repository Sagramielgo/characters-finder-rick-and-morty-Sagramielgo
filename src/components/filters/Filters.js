import FilterInput from './FilterInput';
import FilterSpecies from './FilterSpecies';
import logo from '../../images/logo.png';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit} className="formContainer">
        <img src={logo} alt="logo Rick and Morty" />
        <FilterInput
          handleFilter={props.handleFilter}
          handleReset={props.handleReset}
          name={props.name}
        />
        <FilterSpecies
          handleFilter={props.handleFilter}
          specie={props.specie}
        />
      </form>
    </section>
  );
};
export default Filters;
