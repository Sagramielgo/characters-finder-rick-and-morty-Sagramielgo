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
        <FilterInput handleFilter={props.handleFilter} />
        <FilterSpecies />
      </form>
    </section>
  );
};
export default Filters;
