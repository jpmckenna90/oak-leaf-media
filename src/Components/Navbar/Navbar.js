import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./style.css";

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/home">
        {" "}
        <img
          src={require('../../Assets/Images/oak-leaf-black.png')}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Work" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/work#commercial">Commercial</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Promotional Film
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Feature Film</NavDropdown.Item>
            <NavDropdown.Item href="/work#legacy">
              Legacy Film
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
              Virtual Reality
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
