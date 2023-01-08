import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar({ adminData }) {
  return (
    <Navbar
      className="navbar-custom navBar"
      variant="light"
      expand="xl"
      // fixed="top"
      style={{ borderBottom: '3px solid green', backgroundColor: 'white' }}
    >
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">Stan's Blog</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          {adminData && (
            <Nav className="">
              <Nav.Link href="/administrator">Admin</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
