import React from 'react';
import "./Header.css";
import { Navbar, Nav, Container, Col } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="headercontainer">
      <Navbar collapseOnSelect expand="md" bg="dark" fixed="top" variant="dark">
        <Container fluid >
          <Navbar.Brand><span className="title">Beans of Production</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Col lg="1" className="d-flex justify-content-end">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" exact to="/">Home</NavLink></Nav.Item>
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" to="/about">About me</NavLink></Nav.Item>
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" to="/coffees">My coffees</NavLink></Nav.Item>
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" to="/store">Store</NavLink></Nav.Item>
              <Nav.Item className="px-4 text-nowrap">Basket</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Col>
        </Container>
      </Navbar>
    </div>
    );
}
 
export default Header;