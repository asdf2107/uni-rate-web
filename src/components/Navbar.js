import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <Link to='/'>
        <img className="logo-header" src="img/uni-logo.png" alt="A logo."/>
        <h1>UNI-RATE</h1>
      </Link>
    </header>
  )
}

export default Navbar
