import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {

  var rightNavbarContainer = document.getElementsByClassName('rightNavbarContainer');
  
  const collapseMenu = () => {
    rightNavbarContainer.removeClassName('show')
  }

  return (
    <Navbar expand="lg" variant="dark" className='navbar'>
      <Container className='navbarContainer'>
        <NavLink className='title' to="/">Jorgelina Parkinson</NavLink>
        
        <Navbar.Toggle expand="lg" aria-controls="basic-navbar-nav" className='hamburgerMenu' variant="light"/>
        <Navbar.Collapse className='rightNavbarContainer'>
          <Nav className='rightNavbar'>
            <NavLink className='navbarItems' onClick={collapseMenu} to="/">Inicio</NavLink>
            <NavLink className='navbarItems' onClick={collapseMenu} to="/about">Biografía</NavLink>
            <NavDropdown title="Obras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/gallery/ports2" className='navDropdownItem'>Puentes y puertos</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/cinder2" className='navDropdownItem'>Carbonilla</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/situations2" className='navDropdownItem'>Situaciones cotidianas</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/faces2" className='navDropdownItem'>Rostros</NavDropdown.Item>
              {/* <NavDropdown.Item href="/gallery/human-figure2" className='navDropdownItem'>Figura humana</NavDropdown.Item> */}
              <NavDropdown.Item href="/gallery/ink2" className='navDropdownItem'>Tinta</NavDropdown.Item>
              {/* <NavDropdown.Item href="/gallery/interiors2" className='navDropdownItem'>Interiores</NavDropdown.Item> */}
              <NavDropdown.Item href="/gallery/landscape2" className='navDropdownItem'>Paisajes</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/parana2" className='navDropdownItem'>Paraná</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/route402" className='navDropdownItem'>Ruta 40</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/still-life2" className='navDropdownItem'>Naturaleza muerta</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/women2" className='navDropdownItem'>Mujeres en el Siglo XX</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;