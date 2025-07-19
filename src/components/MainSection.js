import SocialLinks from "../components/SocialLinks";
import SecondNavbar from "../components/SecondNavbar"

function MainSection() {
  return (
    <div className="main-container d-flex h-100 mt-4">
      <div className="left-section ">
        <div className="logo mb-4"><span className="bg-dark text-white py-2 px-1 fs-6 rounded-circle">AH</span></div>
        <div className="intro my-auto">
          <p className="greeting">Hi, I am</p>
          <h1 className="name">Arfeel Haroon</h1>
          <p className="fw-bold">(Front-end / Back-end) Developer</p>
        </div>
        <SocialLinks />
      </div>

      <div className="right-section">
        <SecondNavbar/>
        <p className="note">Photo by Growtika on Unsplash
      </p>
      </div>

    </div>
  );
}

export default MainSection;