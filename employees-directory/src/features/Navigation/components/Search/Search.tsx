import Sort from "../Sort/Sort";
import "./index.scss";


const Search = () => {
  return (
    <div className="header__search">
      <input
        type="text"
        className="header__search-icon"
        placeholder="Search by name, tag, email..."
      />
      <Sort />
    </div>
  );
}

export default Search;

