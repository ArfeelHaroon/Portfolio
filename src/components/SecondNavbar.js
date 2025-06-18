
import {Navbar } from 'react-bootstrap';
import Navlinks from "../components/NavLinks"

function SecondNavbar() {
    return(
    <Navbar bg="dark bg-opacity-50 fw-bold" variant="dark" className='second_nav_for_lg' >
       <Navlinks/>
    </Navbar>
    )
}

export default SecondNavbar;