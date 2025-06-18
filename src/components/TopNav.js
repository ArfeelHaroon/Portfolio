import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function TopNav(){
    return(
     <div className='LargeTopNav'>
        <Navbar bg="dark" variant="dark" >
            
             <Navbar.Brand className='ms-4'>My Portfolio</Navbar.Brand>
             <Nav className="ms-auto me-4">
               <Link to="/" className='text-decoration-none text-white'>Home</Link>
               {/* <Nav.Link href="#features">Features</Nav.Link> */}
             </Nav>
          
           </Navbar>
           {/* <Button variant="primary">Click Me</Button> */}
    </div>
     
    );
}

export default TopNav;