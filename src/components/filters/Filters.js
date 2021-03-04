import FilterInput from './FilterInput';
import FilterSpecies from './FilterSpecies';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1> en marcha!</h1>
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
