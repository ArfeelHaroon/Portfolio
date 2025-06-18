import SocialLinks from "../components/SocialLinks"
import { BiArrowToTop } from "react-icons/bi";
function Footer(){
     const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }) }
    return(

    <div className="footer bg-dark text-light text-center pt-3 pb-1 mt-5  justify-content-center">
        <div className="cursor-pointer mb-4" onClick={scrollToTop}>
            <BiArrowToTop size={25} className="Theicons"/>
        <p className="">Back To Top</p>
        </div>
        
        <div className="my-3 d-flex justify-content-center">
          <SocialLinks/>
        </div>
       <h5>Develop By Arfeel Haroon</h5>
    </div>
    )
}

export default Footer;