import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa'; 
import { FaLinkedin } from 'react-icons/fa'; 

function SocialLinks(){
    return(
     <div className="icons d-flex mt-auto">
        <a href='https://github.com/ArfeelHaroon' target='_blank'>
          <span className='py-3'><FaGithub size={30} color='#000'/></span>
        </a>
        <a href="mailto:haroon.dev.web@gmail.com" target='_blank'>
          <span className='py-3'> <MdEmail size={30} color='#000'/></span>
        </a>
        <a href='https://www.linkedin.com/in/arfeel-haroon-aa502a351' target='_blank'> 
          <span className='py-3'><FaLinkedin size={30} color='#000'/></span>
        </a>
        </div>
    );
}

export default SocialLinks;