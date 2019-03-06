import React from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContainer}>
        BurgerBuilder - Copyright by Luis Villalba
      </div>
    </footer>
  );
}

export default Footer;