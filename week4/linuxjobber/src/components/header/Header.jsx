import React from 'react';
import logo from '../../assets/images/logo.png';
import icon from '../../assets/images/icon.png';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <nav className='main__nav container'>
            <a href="">
                <img src={logo} alt="Logo" className="logo" />
            </a>
            <p className='header__heading'>Classroom Profile</p>
            <button className='header__btn'>
                <span>Go to Classrom</span>
                <img src={icon} className='icon_img' />
            </button>
        </nav>
    </div>
  )
}

export default Header