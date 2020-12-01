import React from 'react';
import '../navbar/Navbar.css';
import home from '../../assets/home.svg';
import guest from '../../assets/profile.svg';
import profile from '../../assets/profile.svg';
import logOut from '../../assets/log-out.svg';

import { useHistory } from 'react-router-dom';

/* Using react-burger-menu plugin for menu functionality */
import { slide as Menu } from 'react-burger-menu';
import './hamburger-style.css';

function Navbar () {

  // Import useHistory for redirect functionality
  const history = useHistory();

  // Redirects user to homepage
  const sendToHome = () => {
    history.push('/');
  };

  return (
    <header>
      <div onClick={sendToHome}>
        <p className="logo-text">Front-pages</p>
      </div>

      <div className="menu-container">
        <img className="profile-icon" src={guest} alt="" />
        <Menu right>
          <a className="menu-item" href="/"><img src={home} alt="" />Home</a>
          <a className="menu-item" href="/"><img src={home} alt="" />Newsletter</a>
          <a className="menu-item" href="/"><img src={home} alt="" />Donate</a>
          <a className="menu-item" href="/"><img src={profile} alt="" />Profile</a>
          <a className="menu-item" href="/"><img src={logOut} alt="" />Log out</a>
          <br></br>
          <a className="menu-item" href="/uk"><img src={logOut} alt="" />UK</a>
          <a className="menu-item" href="/business"><img src={logOut} alt="" />BUSINESS</a>
          <a className="menu-item" href="/tech"><img src={logOut} alt="" />TECH</a>
          <a className="menu-item" href="/entertainment"><img src={logOut} alt="" />ENTERTAINMENT</a>
          <a className="menu-item" href="/science"><img src={logOut} alt="" />SCIENCE</a>
          <a className="menu-item" href="/sports"><img src={logOut} alt="" />SPORTS</a>
          <a className="menu-item" href="/health"><img src={logOut} alt="" />HEALTH</a>
        </Menu>
      </div>

    </header>
  );
}

export default Navbar;
