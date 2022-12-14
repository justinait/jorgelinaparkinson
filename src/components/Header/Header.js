import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <NavLink className='title' to="/">Jorgelina Parkinson</NavLink>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='rightNavbarContainer'>
          <Nav className='rightNavbar'>
            <NavLink className='navbarItems' to="/">Inicio</NavLink>
            <NavLink className='navbarItems' to="/about">Bio</NavLink>
            <NavDropdown title="Obras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Paisajes</NavDropdown.Item>
              <NavDropdown.Item href="/">Mujeres SXX</NavDropdown.Item>
              <NavDropdown.Item href="/">Naturaleza muerta</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;