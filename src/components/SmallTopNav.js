import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLinks from "../components/NavLinks"

function SmallTopNav() {
  return (
    <Navbar expand="none" className="smallTopNav" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinks/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SmallTopNav;