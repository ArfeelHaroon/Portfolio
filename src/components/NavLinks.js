import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function NavLinks(){
  return(
     <Nav className="ms-auto me-4">
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Link to='/contact' className='contact_btn fw-bold border ms-3 cursor-pointer text-center text-decoration-none py-2 px-2'>Contact Me</Link>
    </Nav>
  );
}

export default NavLinks;