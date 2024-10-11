import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from './components/Filter/Filter';
import Search from './components/Search/Search';
import './index.scss';



const Navigation: React.FC = () => {
  const location = useLocation();
  const isEmployeesProfile = location.pathname.startsWith('/employees/');

  return (
    <div className={`header ${isEmployeesProfile ? 'header__icons-bar--profile' : ''}`}>

      <div className="header__icons-bar">
        <div className="header__time">9:41</div>
        <div className="header__icons">
          <img src="/public/signal-icon.png" alt="signal" />
          <img src="/public/Wi-Fi.png" alt="wi-fi" />
          <img src="/public/battery.png" alt="battery" />
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
