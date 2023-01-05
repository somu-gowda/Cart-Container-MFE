import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Fragment>
      <Navbar className="bg-primary p-4">
          <Navbar.Brand href="/">E-Cart</Navbar.Brand>
          <Navbar.Toggle />
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
