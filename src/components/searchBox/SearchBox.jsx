import { useId } from "react";
import css from "./SearchBox.module.css";

function SearchBox({ searchValue, handleChangeSearch }) {
  const searchId = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        id={searchId}
        type="text"
        value={searchValue}
        onChange={handleChangeSearch}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBox;
