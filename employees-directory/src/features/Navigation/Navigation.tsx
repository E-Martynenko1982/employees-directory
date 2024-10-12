import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from './components/Filter/Filter';
import Search from './components/Search/Search';
import SignalIcon from "../../public/img/signal-icon.png";
import WiFiIcon from "../../public/img/Wi-Fi.png";
import BatteryIcon from "../../public/img/battery.png"
import './index.scss';



const Navigation: React.FC = () => {
  const location = useLocation();
  const isEmployeesProfile = location.pathname.startsWith('/employees/');

  return (
    <div className={`header ${isEmployeesProfile ? 'header__icons-bar--profile' : ''}`}>

      <div className="header__icons-bar">
        <div className="header__time">9:41</div>
        <div className="header__icons">
          <img src={SignalIcon} alt="signal" />
          <img src={WiFiIcon} alt="wi-fi" />
          <img src={BatteryIcon} alt="battery" />
        </div>
      </div>
      {!isEmployeesProfile && (
        <div className="header__desktop-content">
          Search
        </div>
      )}

      {!isEmployeesProfile && (
        <>
          <Search />
          <Filter />
          <div className="header__line"></div>
        </>
      )}
    </div>
  );
};

export default Navigation;
