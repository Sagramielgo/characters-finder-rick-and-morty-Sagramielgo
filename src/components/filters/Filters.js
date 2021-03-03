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
        />
        <FilterSpecies handleFilter={props.handleFilter} />
      </form>
    </section>
  );
};
export default Filters;
