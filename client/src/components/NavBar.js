import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar({ adminData }) {
	return (
		<Navbar className="navbar-custom" variant="light" expand="xl" fixed="top">
			<Container>
				<Navbar.Brand>Stan's Blog </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav>
					{adminData && (
						<Nav className="">
							<Nav.Link href="/">Admin</Nav.Link>
						</Nav>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
