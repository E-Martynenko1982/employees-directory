import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import Filter from './components/Filter/Filter';
import Search from './components/Search/Search';
import useWindowWidth from '../../hooks/useWindowWidth';
import './index.scss';

const Navigation: React.FC = () => {
  const location = useLocation();
  const isEmployeesProfile = location.pathname.startsWith('/employees/');
  const isOnline = useSelector((state: RootState) => state.connection.isOnline);
  const windowWidth = useWindowWidth();

  const isLargeScreen = windowWidth > 1279;

  return (
    <div className={`header ${isEmployeesProfile ? 'header__icons-bar--profile' : ''}`}>


      <div className="header__icons-bar">
        <div className="header__time">9:41</div>
        <div className="header__icons">
          <img src="/images/signal-icon.png" alt="signal" />
          <img src="/images/Wi-Fi.png" alt="wi-fi" />
          <img src="/images/battery.png" alt="battery" />
        </div>
      </div>


      {isLargeScreen && (
        <>
          {!isOnline ? (
            <div className="header__network-error">
              <h4>Search</h4>
              <p>
                Не могу обновить данные.
                Проверь соединение с интернетом.
              </p>
            </div>
          ) : (
            <div className="header__desktop-content">
              <div className="header__desktop-title">Search</div>
              <Search />
            </div>
          )}
          <Filter />
          <div className="header__line"></div>
        </>
      )}


      {!isLargeScreen && (
        <div className="header__mobile-content">
          <Search />
        </div>
      )}


      {!isLargeScreen && !isOnline && (
        <div className="header__network-error">
          <p>
            Не могу обновить данные.<br />
            Проверь соединение с интернетом.
          </p>
        </div>
      )}
    </div>
  );
};

export default Navigation;
