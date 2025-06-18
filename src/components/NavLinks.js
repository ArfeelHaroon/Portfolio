import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
function NavLinks(){
  return(
     <Nav className="ms-auto me-4">
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link className='contact_btn fw-bold border ms-3 cursor-pointer text-center'>Contact Me</Nav.Link>
    </Nav>
  );
}

export default NavLinks;