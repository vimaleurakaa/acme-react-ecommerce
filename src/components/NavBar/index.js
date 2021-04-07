import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./index.module.scss";
import { RiShoppingCart2Line } from "react-icons/ri";

const MenuBar = () => {
  return (
    <div className={styles.nav}>
      <Navbar expand="lg" className="sticky-top container">
        <Navbar.Brand href="/">
          <img src="./assets/logo.svg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ml-auto ${styles.navbar_items}`}>
            <Nav.Link className={styles.nav_item} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href="#about">
              About
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href="#about">
              Shop
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href="#about">
              Donate
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href="#about">
              Contact
            </Nav.Link>
            <Nav.Link className={styles.nav_item} href="#cart">
              <RiShoppingCart2Line />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
