import React from 'react';
import './styles.scss';

const EmployeesProfile = () => {
  return (
    <div className="profile">
      <div className="profile__title">
        <div className="header">
          <div className="header__icons-bar">
            <div className="header__time">9:41</div>
            <div className="header__icons">
              <img src="./img/signal-icon.png" alt="signal" />
              <img src="./img/Wi-Fi.png" alt="wi-fi" />
              <img src="./img/battery.png" alt="battery" />
            </div>
          </div>
        </div>

        <div className="profile__title-content">
          <div className="profile__arrow">
            <img className="profile__arrow-img" src="./img/left-arrow.svg" alt="arrow" />
          </div>
          <img className="profile__title-avatar" src="./img/flying-geese.png" alt="avatar" />
          <div className="profile__name-container">
            <div className="profile__title-box">
              <span className="profile__title-name">Алиса Иванова</span>
              <span className="profile__title-tag">ai</span>
            </div>

            <span className="profile__title-position">Designer</span>
          </div>
        </div>
      </div>

      <div className="profile__info">
        <div className="profile__info-date">
          <span className="profile__info-bd">5 июня 1996</span>
          <span className="profile__info-age">24 года</span>
        </div>
        <span className="profile__info-phone">0935241590</span>
      </div>
      <div className="profile__collapse-line"></div>
    </div>
  );
}

export default EmployeesProfile;
