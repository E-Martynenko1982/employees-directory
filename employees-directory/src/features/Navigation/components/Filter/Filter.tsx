import "./index.scss";

const Filter = () => {
  return (
    <>
      <ul className="header__filter-list">
        <li className="header__filter-item header__filter-item--button-active">
          <button className="header__filter-item--button">Все</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button">Designers</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button">Analysts</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button">Managers</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button">iOS</button>
        </li>
        <li className="header__filter-item">
          <button className="header__filter-item--button">Android</button>
        </li>
      </ul>
    </>
  );
}

export default Filter;
