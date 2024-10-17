import React from 'react';
import { useLocation } from 'react-router-dom';
import Filter from './components/Filter/Filter';
import Search from './components/Search/Search';
import { useAppSelector } from '../../hooks/hooks';
import useWindowWidth from '../../hooks/useWindowWidth';
import './index.scss';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isEmployeesProfile = location.pathname.startsWith('/employees/');
  const isOnline = useAppSelector((state) => state.connection.isOnline);
  const windowWidth = useWindowWidth();

  const isLargeScreen = windowWidth > 1279;


  const hideComponents = isLargeScreen && !isOnline;

  return (
    <div className={`header ${isEmployeesProfile ? 'header__icons-bar--profile' : ''}`}>

      {!hideComponents && (
        <div className="header__icons-bar">
          <div className="header__time">9:41</div>
          <div className="header__icons">
            <img src="/images/signal-icon.png" alt="signal" />
            <img src="/images/Wi-Fi.png" alt="wi-fi" />
            <img src="/images/battery.png" alt="battery" />
          </div>
        </div>
      )}


      {!hideComponents && !isEmployeesProfile && (
        <div className="header__desktop-content">
          Search
        </div>
      )}


      {!hideComponents && !isEmployeesProfile && (
        <>
          <Search />
          <Filter />
          <div className="header__line"></div>
        </>
      )}


      {!isOnline && (
        <div className="header__network-error">
          <p>Не могу обновить данные.<br />
            Проверь соединение с интернетом.</p>
        </div>
      )}
    </div>
  );
};

export default Navigation;

