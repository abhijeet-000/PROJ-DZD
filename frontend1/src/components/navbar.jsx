import React from 'react';
import './navbar.css';

function Navbar({ user, logout }) {
  if (user)
    console.log(user.username);
  return (
    // <nav className="navbar">
    //     <div className="navbar-left">
    //         <a href="/" >
    //             <span className="white-text">DZD</span>
    //         </a>
    //     </div>
    //     <div className="navbar-right">
    //         <a href="/about" className="about">
    //             <span className="white-text">About</span>
    //         </a>
    <div className="container123">
      <nav className="navv">
        <div className="logo">
          <a className="a" href="/"><span className="spann">D-</span>ZERODAY</a>
        </div>
        <ul className="navdetails">
          
          <li className="navitems"><a className="navitemsa" href="/about">About Us</a></li>
          <li className="navitems"><a className="navitemsa" href="/instructions">Instructions</a></li>
          
          <li className="navitems">
            {user ? (
              <a href="/signup">
                <button className="button" onClick={logout}>{user.username}</button>
              </a>
            ) : (
              <a href="/signup">
                <button className="button">Sign Up</button>
              </a>
            )}
          </li>
        </ul>
      </nav>

    </div>

  );
};

export default Navbar;