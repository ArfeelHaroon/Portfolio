import profile from '../assets/profile.png';
import SocialLinks from "../components/SocialLinks";
import SecondNavbar from "../components/SecondNavbar"

function MainSection() {
  return (
    <div className="main-container d-flex h-100 mt-4">
      <div className="left-section ">
        <div className="logo mb-4">AH</div>
        <div className="intro my-auto">
          <p className="greeting">Hi, I am</p>
          <h1 className="name">Arfeel Haroon</h1>
          <p className="role">(Front-end / Back-end) Developer</p>
        </div>
        <SocialLinks />
      </div>

      <div className="right-section">
        <SecondNavbar/>
        <img src={profile} alt="profile" className="profile-pic h-50" />
        {/* <p className="note">this is not my photo,<br />but I dearly hope to<br />get one just like this</p> */}
      </div>

    </div>
  );
}

export default MainSection;