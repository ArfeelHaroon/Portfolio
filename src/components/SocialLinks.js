import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa'; 
import { FaLinkedin } from 'react-icons/fa'; 

function SocialLinks(){
    return(
     <div className="icons d-flex mt-auto">
          <span><FaGithub size={30} color='#000'/></span>
          <span> <MdEmail size={30} color='#000'/></span>
          <span><FaLinkedin size={30} color='#000'/></span>
        </div>
    );
}

export default SocialLinks;