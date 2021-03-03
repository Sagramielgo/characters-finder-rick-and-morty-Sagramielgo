import FilterInput from './FilterInput';
import FilterSpecies from './FilterSpecies';

const Filters = (props) => {
  return (
    <section>
      <form>
        <h1>Segundo commit y en marcha!</h1>;
        <FilterInput handleFilter={props.handleFilter} />;
        <FilterSpecies />
      </form>
    </section>
  );
};
export default Filters;
