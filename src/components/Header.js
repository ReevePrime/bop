import React from 'react';
import "./Header.css";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <React.Fragment>
      <div className="d-block d-md-none text-center title">Beans of Production</div>
      <Navbar collapseOnSelect expand="md">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-between">
          <Nav>
            <Nav.Item className="p-2 nav-item">Home</Nav.Item>
            <Nav.Item className="p-2 nav-item">About Me</Nav.Item>
          </Nav>
        </Navbar.Collapse>
          <div className="d-none d-md-block title">Beans of Production</div>
          <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
          <Nav>
            <Nav.Item className="p-2 nav-item">My Coffees</Nav.Item>
            <Nav.Item className="p-2 nav-item">Store</Nav.Item>
            <Nav.Item className="p-2 nav-item">Basket</Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
    );
}
 
export default Header;