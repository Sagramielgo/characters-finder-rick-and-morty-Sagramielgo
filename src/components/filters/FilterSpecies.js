const FilterSpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'specie',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label>Species:</label>
      <select
        className="form__input-text"
        name="specie"
        id="specie"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Alien">Alien</option>
        <option value="Human">Human</option>
      </select>
    </>
  );
};
export default FilterSpecies;
