
import { PiCertificateDuotone } from "react-icons/pi";
import HTMLImg from "../assets/HTMLcertificate.png";
import CSSImg from "../assets/cssCertificate.png";
import JSImg from "../assets/javascriptCertificate.png";
import resturantImg from "../assets/RestaurantSiteCertificate.png";
import reactImg from "../assets/reactCertificate.png";


import { SiTailwindcss, SiJson } from "react-icons/si";
function Certificates() {
    return (
        <div id="certificates" className=" mt-2 px-5 mt-3 pt-3 tech-icons">
            <h3 className='p-3 m-auto text-center certificatesHeading'>
                <PiCertificateDuotone size={40} />
                <span className="mx-3"> CERTIFICATES </span>
            </h3>
            <div className="w-75 mx-auto mt-5">
                <div className="container text-center mt-4">
                    <div className="align-items-center">
                        <div className="row">
                            <img alt="HTML Certificate" src={HTMLImg} className='certificate_imgs'/>
                            <img alt="CSS Certificate" src={CSSImg} className='certificate_imgs'/> 
                        </div>
                        <div className="row">
                            <img alt="JS Certificate" src={JSImg} className='certificate_imgs'/>
                            <img alt="ResturantSite Certificate" src={resturantImg} className='certificate_imgs'/> 
                        </div>
                        <div className="row">
                            <img alt="React Certificate" src={reactImg} className='certificate_imgs'/>
                            {/* <img src={resturantImg} className='certificate_imgs'/>  */}
                        </div>

                      
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Certificates;