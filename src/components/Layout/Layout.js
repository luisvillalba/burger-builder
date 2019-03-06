import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.module.css';

const Layout = (props) => {
	return (
		<Aux>
			<Header />
			<main className={classes.MainContainer}>
					{props.children}
			</main>
			<Footer />
		</Aux>
	);
};

export default Layout;