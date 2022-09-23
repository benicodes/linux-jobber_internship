import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default function Home() {
  return (
    <div className='home'>
      <div>
        <div className='logoContainer'>
          <img src={logo} alt="logo" />
        </div>
        <h1>CHATSCRUM APP</h1>
        <div className='links'>
          <Link to='/signin' className='link home_signinBtn'>
            <h4>SIGN IN</h4>
          </Link>
          <Link to='/signup' className='link home_signupBtn'>
            <h4>SIGN UP</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}
