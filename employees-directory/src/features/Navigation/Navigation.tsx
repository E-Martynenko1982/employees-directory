import Filter from "./components/Filter/Filter.tsx";
import Search from "./components/Search/Search.tsx";
import "./index.scss";

const Navigation = () => {
  return (
    <div className='header'>
      <div className="header__icons-bar">
        <div className="header__time">9:41</div>
        <div className="header__icons">
          <img src="../../icons/signal-icon.png" alt="signal" />
          <img src="../../icons/Wi-Fi.png" alt="wi-fi" />
          <img src="../../icons/battery.png" alt="battery" />
        </div>
      </div>
      <Search />

      <Filter />
      <div className="header__line"></div>
    </div>

  );
}

export default Navigation;
