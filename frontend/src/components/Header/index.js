import React from "react";
import { ReactSVG } from "react-svg";
import "./style.scss";

import { Logo, Nav, ProfileDropdown } from "../../components";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
            <Nav />
          </div>
          <div className="header__right">
            <div className="header__search">
              <form className="header__search-form">
                <input className="header__search-input" placeholder="Найти сериалы" type="text" />
              </form>
              <button className="header__search-btn" onclick="openSearch(this)">
                <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path
                    fill="#000000"
                    fill-rule="evenodd"
                    d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
                  />
                </svg>
              </button>
            </div>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};