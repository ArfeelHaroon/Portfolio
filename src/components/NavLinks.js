import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function NavLinks(){
  return(
     <Nav className="ms-sm-1 ms-md-auto me-4">
            <Nav.Link href="/Portfolio/#about">About me</Nav.Link>
            <Nav.Link href="/Portfolio/#skills">Skills</Nav.Link>
            <Nav.Link href="/Portfolio/#certificates">Certificates</Nav.Link>
            <Link to='/contact' className='d-block contact_btn fw-bold cursor-pointer text-center text-decoration-none py-2 px-2 mt-sm-2 mt-md-0 ms-4 mb-sm-2 mb-md-0'>Contact Me</Link>
    </Nav>
  );
}

export default NavLinks;
