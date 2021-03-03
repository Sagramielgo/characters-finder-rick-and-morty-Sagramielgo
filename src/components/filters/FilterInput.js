import '../stylesSheets/SearchInput.scss';
const FilterInput = (props) => {
  return (
    <form className="form" action="">
      <label className="form__label" htmlFor="searchField">
        <input
          className="form__input"
          type="text"
          name="searchField"
          id="searchField"
          placeholder="Insert character name"
          /*     onChange={handleChange}
        onSubmit={handleSubmit}
        autoComplete="off" */
        ></input>
        <span className="icon iconInput fas fa-undo"></span>
      </label>
    </form>
  );
};
export default FilterInput;
