// src/features/Navigation/Navigation.tsx

import React from 'react';
import useNetworkStatus from '../../hooks/useNetworkStatus';
import { useLocation, matchPath } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import "./index.scss";
import Filter from './components/Filter/Filter';
import Search from './components/Search/Search';

const Navigation: React.FC = () => {
  const isOnline = useNetworkStatus();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:1280px)');
  const isProfilePage = matchPath('/employees/:id', location.pathname) !== null;

  if (isProfilePage && !isMobile) {
    return null;
  }

  return (
    <header className={`header ${isProfilePage ? 'header--profile' : ''}`}>
      {isProfilePage && isMobile ? (
        <div></div>
      ) : (
        <div className="header__icons-bar">
          <div className="header__time">9:41</div>
          <div className="header__icons">
            <img src="/images/signal-icon.png" alt="signal" />
            <img src="/images/Wi-Fi.png" alt="wi-fi" />
            <img src="/images/battery.png" alt="battery" />
          </div>
        </div>
      )}

      {!isProfilePage && (
        <>
          {!isOnline && (
            <div className="header__network-error">
              {isMobile ? <h4>Search</h4> : null}
              <p>
                Не могу обновить данные.
                Проверь соединение с интернетом.
              </p>
            </div>
          )}

          {isMobile ? (
            <div className="header__mobile-content">
              <Search />
            </div>
          ) : (
            isOnline && (
              <div className="header__desktop-content">
                <div className="header__desktop-title">Search</div>
                <Search />
              </div>
            )
          )}

          <Filter />
          <div className="header__line"></div>
        </>
      )}
    </header>
  );
};

export default Navigation;
