import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
function TopNav(){
    return(
     <div className='LargeTopNav'>
        <Navbar bg="dark" variant="dark" >
            
             <Navbar.Brand href="#home" className='ms-4'>My Portfolio</Navbar.Brand>
             <Nav className="ms-auto me-4">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">Features</Nav.Link>
             </Nav>
          
           </Navbar>
           {/* <Button variant="primary">Click Me</Button> */}
    </div>
     
    );
}

export default TopNav;