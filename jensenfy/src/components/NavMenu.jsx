import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavMenu() {
  return (
    <Navbar bg="dark" expand="lg" variant="light" className='meny1'>
      <Container>
        <Navbar.Brand href="/">Spofifyy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/LoginPage'>Lgoin page</Nav.Link>
            <Nav.Link href='/SpotifyLogin'>Spotify login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu