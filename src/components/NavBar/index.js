import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './index.module.scss';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const MenuBar = ({ cart }) => {
	return (
		<div className={`sticky-top  ${styles.nav}`}>
			<Navbar expand="lg" className="container">
				<Navbar.Brand href="/">
					<img src={Logo} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className={`ml-auto ${styles.navbar_items}`}>
						<Nav.Link className={styles.nav_item} as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link className={styles.nav_item} as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link className={styles.nav_item} as={Link} to="/shop">
							Shop
						</Nav.Link>
						<Nav.Link className={styles.nav_item} as={Link} to="/donate">
							Donate
						</Nav.Link>
						<Nav.Link className={styles.nav_item} as={Link} to="/contact">
							Contact
						</Nav.Link>
						<Nav.Link className={styles.nav_item} as={Link} to="/cart">
							<RiShoppingCart2Line />
							<span className={`cart_items_count ${cart <= 0 && 'invisible'}`}>
								{cart}
							</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default MenuBar;
