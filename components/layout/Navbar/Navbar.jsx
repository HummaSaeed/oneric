import React from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';
import background_img from '../../assets/mask.png';
import avatar from '../../assets/avatar.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="logo p-2"><Image src={logo} alt="logo"/></div>
          <div className="separator" />
          <div className="menu-icon p-2"><Image src={menu} alt="menu"/></div>
        </div>
        <Image src={background_img} alt="Dashboard" className="dashboard-image" />
        <div className="profile d-flex align-items-center">
        <span className="welcome-text">Welcome, Humma</span>
          <Image src={avatar} alt="Profile" className="profile-picture" />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
