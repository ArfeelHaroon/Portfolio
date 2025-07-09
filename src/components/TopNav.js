import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div className='LargeTopNav'>
      <Navbar bg="dark" variant="dark" >

        <Navbar.Brand className='ms-4'>
          <Link to="/" onClick={() => {
            window.scrollTo(0, 0); // optional: scrolls to top
          }} className='text-decoration-none text-white'>My Portfolio</Link>
        </Navbar.Brand>
        <Nav className="ms-auto me-4">
          <Link to="/" className='text-decoration-none text-white'>Home</Link>
        </Nav>

      </Navbar>
    </div>

  );
}

export default TopNav;