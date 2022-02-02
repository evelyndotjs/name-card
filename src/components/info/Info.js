import "./Info.css";
import profile from "../../images/profile-yellow.PNG";

function Info() {
  return (
    <div className="info-wrapper">
      <img src={profile} alt="profile" />
      <h1 className="profile-name">Evelyn Huang</h1>
      <h2 className="profile-title">Frontend Developer</h2>
      <h3 className="profile-website">evelynportfolio.com</h3>
      <a
        href="mailto:ehuang1107@gmail.com
      "
      >
        <button className="email-btn">Email</button>
      </a>
      <a href="www.linkedin.com/in/evelynhg1107" target="_blank">
        <button className="linkedin-btn">LinkedIn</button>
      </a>
    </div>
  );
}

export default Info;
