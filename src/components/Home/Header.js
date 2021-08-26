import React from 'react';
import "./Header.css";
import { Navbar, Nav, Container, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg="dark" fixed="top" variant="dark">
        <Container fluid >
          <Navbar.Brand><span className="title">Beans of Production</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Col lg="1" className="d-flex justify-content-end">
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <Nav.Item className="px-4 nav-item text-nowrap">Home</Nav.Item>
              <Nav.Item className="px-4 nav-item text-nowrap">About Me</Nav.Item>
              <Nav.Item className="px-4 nav-item text-nowrap">My Coffees</Nav.Item>
              <Nav.Item className="px-4 nav-item text-nowrap">Store</Nav.Item>
              <Nav.Item className="px-4 nav-item text-nowrap">Basket</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Col>
        </Container>
      </Navbar>
    </React.Fragment>
    );
}
 
export default Header;