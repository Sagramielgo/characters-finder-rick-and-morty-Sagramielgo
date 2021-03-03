const FilterSpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'species',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label>Especie:</label>
      <select
        className="form__input-text"
        name="species"
        id="species"
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};
export default FilterSpecies;
