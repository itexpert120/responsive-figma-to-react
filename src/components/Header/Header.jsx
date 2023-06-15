import "./Header.css";
import { HeroImage } from "../../assets";

import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <p className="course-name">Sound Design Masterclass</p>
          <h1>Learn the Art of Sound Design</h1>
          <a href="#" className="demo-btn">
            Demo Lesson
          </a>
        </div>
      </div>
      <img className="hero-image" src={HeroImage} alt="" />
    </header>
  );
}

export default Header;
