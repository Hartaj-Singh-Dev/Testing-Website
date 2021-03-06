import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarClass, setnavbarClass] = useState(false);
  const ChangeNavbar = () => {
    if (window.innerWidth >= 700) {
      if (window.scrollY <= 490) {
        setnavbarClass(false);
      } else if (window.scrollY >= 490 && window.scrollY <= 1230) {
        setnavbarClass(true);
      } else {
        setnavbarClass(false);
      }
    }else if(window.innerWidth <= 650){
        if (window.scrollY <= 490) {
            setnavbarClass(false);
        }else if(window.scrollY >=490 && window.scrollY <= 1830){
            setnavbarClass(true);
        } else{
            setnavbarClass(false)
        }
    }
  };
  window.addEventListener("scroll", ChangeNavbar);
  window.addEventListener("resize", ChangeNavbar);
  return (
    <React.Fragment>
      <div className={navbarClass ? "Navbar-active" : "Navbar"}>
        <nav className={navbarClass ? "nav-active" : "nav"}>
          <Link to="about" spy={true} smooth={true} duration={100} delay={50}>
            <span
              className="navlink"
              style={{ fontSize: "1.1rem", fontWeight: "500" }}
            >
              About
            </span>
          </Link>
          <Link to="home" spy={true} smooth={true} duration={100} delay={50}>
            <span
              style={{
                fontFamily: "Mrs Saint Delafield",
                fontSize: "1.9rem",
                fontWeight: "600",
                marginTop: "0px",
              }}
            >
              Hartaj Singh
            </span>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={100} delay={50}>
            <span
              className="navlink"
              style={{ fontSize: "1.1rem", fontWeight: "500" }}
            >
              Contact Me
            </span>
          </Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
