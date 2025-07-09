
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
            <div className="certificatesContainer mx-auto mt-5">
                <div className="container text-center mt-4">
                    <div className="align-items-center">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/1ONTZ8WJZS9G"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img alt="HTML Certificate" src={HTMLImg} className="certificate-img" />
                                </a>
                            </div>
                            <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/KRGDFNFC202Y"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img alt="CSS Certificate" src={CSSImg} className="certificate-img" />
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/1X8BP7FI6SHE"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img alt="JS Certificate" src={JSImg} className="certificate-img" />
                                </a>
                            </div>
                            <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/MJ8X7SVQNA9O" 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img alt="ResturantSite Certificate" src={resturantImg} className="certificate-img" />
                                </a>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/14ZZC5BQ9ZCF"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img alt="React Certificate" src={reactImg} className="certificate-img" />
                                </a>
                            </div>
                        </div>

                        {/* <div className="row">
                            <a className="w-50" href="https://www.coursera.org/account/accomplishments/certificate/1X8BP7FI6SHE" target="_blank" rel="noopener noreferrer">
                                <img alt="JS Certificate" src={JSImg} className='certificate_imgs' />
                            </a>
                            <a href="https://www.coursera.org/account/accomplishments/certificate/MJ8X7SVQNA9O" target="_blank" rel="noopener noreferrer">
                                <img alt="ResturantSite Certificate" src={resturantImg} className='certificate_imgs' />
                            </a>
                        </div> */}
                        


                    </div>
                </div>

            </div>
        </div>
    );
}

export default Certificates;