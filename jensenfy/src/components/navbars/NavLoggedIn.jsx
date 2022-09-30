import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavLoggedIn() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className='meny1' >
      <Container>
        <Navbar.Brand href="/">Jensenfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/authlog'>My site</Nav.Link>
            <Nav.Link href='/'>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavLoggedIn