import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm custom-navbar-bg" expanded={expanded} onToggle={setExpanded}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <span className="text-primary">CNC</span> Consultant
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
            <Nav.Link as={Link} to="/" eventKey="home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" eventKey="services">Services</Nav.Link>
            <Nav.Link as={Link} to="/blog" eventKey="blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" eventKey="contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
