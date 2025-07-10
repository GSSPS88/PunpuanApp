import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
  /*======== Toggle Menu ========*/
    const[Toggle, showMenu] = useState(false);
  
  return (
      <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
              PunPuan
            </a>

            <div className= {Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <div className="nav__close">
                    <i class="bi bi-x-lg" onClick={() => showMenu(!Toggle)} ></i>
                </div>
                
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link active-link">
                          <i class="bi bi-house-door nav__icon"></i> 
                          Home
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/aboutPage" className="nav__link active-link">
                          <i class="bi bi-person nav__icon"></i> 
                          About us
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/aboutPage" className="nav__link active-link">
                          <i class="bi bi-search nav__icon"></i> 
                          Explore
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/aboutPage" className="nav__link active-link">
                          <i class="bi bi-envelope nav__icon"></i> 
                          Contact
                        </Link>
                    </li>
                    <li className="nav__item">

                        <Link to="/SignUp" className="nav__link active-link">
                          <i class="bi bi-people nav__icon"></i> 
                          Sign Up
                        </Link>
                    </li>
                </ul>

            </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="bi bi-list"></i>

          </div>
        </nav>
    </header>
  );
}

export default Header