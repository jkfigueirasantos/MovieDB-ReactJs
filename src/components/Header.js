import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header className="App__header">
      <div className="App__brand">
        <img width="80" src={logo} className="App__logo" alt="logo" />
      </div>
      <h1 className="App__title">MoviesDB ReactJS Search</h1>
    </header>
  )
};

export default Header;
