import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavMenu() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className='meny1'>
      <Container>
        <Navbar.Brand href="/">Jensenfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/About'>About us</Nav.Link>
            <Nav.Link href='/LoginPage'>Login</Nav.Link>
            <Nav.Link href='/Register'>Become a member</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu