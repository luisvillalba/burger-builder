import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContainer}>
        <span className={classes.Logo}>Logo</span>
        <nav>
          <ul className={classes.Navigation}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about/'>About</NavLink></li>
            <li><NavLink to='/orders/'>Orders</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;