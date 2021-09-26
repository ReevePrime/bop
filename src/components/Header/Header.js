import React from 'react';
import "./Header.css";
import { Navbar, Nav, Container, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';



const Header = () => {
  const basket = useSelector(state => state.shop.qtyitems)
  return (
    <div className="headercontainer">
      <Navbar collapseOnSelect expand="md" bg="dark" fixed="top" variant="dark">
        <Container fluid >
          <Navbar.Brand><span className="title">Beans of Production</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Col lg="1" className="d-flex justify-content-end">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" exact to="/">Home</NavLink></Nav.Item>
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" to="/about">About me</NavLink></Nav.Item>
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" to="/coffees">My coffees</NavLink></Nav.Item>
              <Nav.Item className="px-4 text-nowrap"><NavLink className="navlink" activeClassName="navlinkactive" to="/store">Store</NavLink></Nav.Item>
              <span class="material-icons md-18">shopping_basket</span>
              <div className="basket-icon"><Badge bg="secondary">{basket}</Badge></div>
            </Nav>
          </Navbar.Collapse>
        </Col>
        </Container>
      </Navbar>
    </div>
    );
}
 
export default Header;