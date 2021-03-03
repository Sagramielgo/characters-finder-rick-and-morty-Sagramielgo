const FilterSpecies = () => {
  return (
    <>
      <label>Especie:</label>
      <select className="form__input-text" name="gender" id="gender">
        <option value="all">Todas</option>
        <option value="female">Alien</option>
        <option value="male">Humana</option>
      </select>
    </>
  );
};
export default FilterSpecies;
