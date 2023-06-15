import "./Footer.css";

import { FacebookLogo, InstagramLogo, TwitterLogo } from "../../assets";

function Footer() {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="footer-items">
          <div className="about-section">
            <div className="logo">
              <p>
                Sound<span className="red">DZign</span>
              </p>
              <div className="socials">
                <img src={FacebookLogo} />
                <img src={InstagramLogo} />
                <img src={TwitterLogo} />
              </div>
            </div>
          </div>
          <div className="links-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="links-section">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:contact@email.com">contact@email.com</a>
              </li>
              <li>
                <a href="#">+1 999 9999 999</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          This website is designed by GTCoding Ⓒ 2022
        </div>
      </div>
    </footer>
  );
}

export default Footer;
