import twitter from "../../images/Twitter Icon.png";
import facebook from "../../images/Facebook Icon.png";
import instagram from "../../images/Instagram Icon.png";
import github from "../../images/GitHub Icon.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <a href="www.twitter.com" target="_blank">
        <img src={twitter} alt="twitter logo" />
      </a>
      <a href="www.facebook.com" target="_blank">
        <img className="icon" src={facebook} alt="facebook logo" />
      </a>
      <a href="www.instagram.com" target="_blank">
        <img className="icon" src={instagram} alt="instagram logo" />
      </a>
      <a href="www.github.com" target="_blank">
        <img className="icon" src={github} alt="github logo" />
      </a>
    </div>
  );
}

export default Footer;
