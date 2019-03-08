import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContainer}>
        <span className={classes.Logo}>Logo</span>
        <nav>
          <ul className={classes.Navigation}>
            <li>Home</li>
            <li>About</li>
            <li>Orders</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;