import React, { useState } from "react";
import "../Styles/About.css";
import Typewriter from "typewriter-effect";
import { Element } from "react-scroll";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { IconButton } from "@material-ui/core";
import { Link } from "react-scroll";
import MyPic from "../Asset/AnyConv.com__Favicon.jpg";

const About = () => {
  const [TypeEffect, setTypeEffect] = useState(false);
  const typeEffect = () => {
    if (window.scrollY >= 600) {
      setTypeEffect(true);
    } else {
      setTypeEffect(false);
    }
  };
  window.addEventListener("scroll", typeEffect);
  return (
    <React.Fragment>
      <Element id="about" name="about">
        <div className="About">
          <div className="aboutHeader">
            <div className="textAnimation">
              <h1 style={{ fontWeight: "490", fontSize: "2.1rem" }}>
                {TypeEffect ? (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(100)
                        .pasteString(" Hi 👋,Myself ")
                        .typeString(
                          "<strong style={{fontWeight:'695'}}> Hartaj Singh </strong> "
                        )
                        .pasteString(" ,an")
                        // .pauseFor(200)
                        .typeString(
                          "<strong style={{fontWeight:'695'}}>  Entrepreneur  </strong> "
                        )
                        .pasteString(" | ")
                        // .pauseFor(200)
                        .typeString(
                          "<strong style={{fontWeight:'695'}}> Web Developer</strong>"
                        )
                        .start();
                    }}
                  />
                ) : (
                  ""
                )}
              </h1>
            </div>
          </div>
          <div className="bioData">
            <div className="MyPic">
              <img
                src={MyPic}
                alt=""
                loading="lazy"
                style={{ height: "15rem", width: "15rem", borderRadius: "50%" }}
              />
            </div>
            <div className="data">
              <p>
                So as you already know my name
                <span>
              
                  ,I am Currenly mastering full-stack web development and
                  business management
                </span>
                So over last year, I’ve invested time in working on what
                interests me .I recently worked on project of Instagram clone
                and a few extra exciting projects,you could take a look at my
                Github also . I even have additionally try and learn about
                Businesses and Finances
              </p>
              <div
                className="dataCards"
              >
                <div className="card">
                  <div
                    className="cardHead"
                    style={{
                      textAlign: "center",
                      fontFamily: "Roboto",
                      marginTop: "0.2rem",
                    }}
                  >
                    <h2>Skills</h2>
                  </div>
                  <div
                    className="cardsubHeader"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      fontFamily: "Roboto",
                    }}
                  >
                  
                    <div>Skills</div> Effeciency
                  </div>
                  <div className="cardDetails" style={{ display: "flex" }}>
                    <div
                      className="skills"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        paddingLeft: "0.5rem",
                        width: "09rem",
                      }}
                    >
                      <div
                        className="skillReact"
                        style={{ height: "1.7rem", fontFamily: "Roboto" }}
                      >
                        <i
                          class="fab fa-react fa-lg"
                          style={{ color: "#0c73d3" }}
                        ></i>
                        --React
                      </div>
                      <div
                        className="skillHTML"
                        style={{ height: "1.7rem", fontFamily: "Roboto" }}
                      >
                        <i
                          class="fab fa-html5 fa-lg"
                          style={{ color: "#f75312" }}
                        ></i>
                        --HTML
                      </div>
                      <div
                        className="skillCSS"
                        style={{ height: "1.7rem", fontFamily: "Roboto" }}
                      >
                        <i
                          class="fab fa-css3-alt fa-lg"
                          style={{ color: "blue" }}
                        ></i>
                        --CSS
                      </div>
                      <div
                        className="skillJS"
                        style={{ height: "1.7rem", fontFamily: "Roboto" }}
                      >
                        <i
                          class="fab fa-js fa-lg"
                          style={{ color: "#ffdb0f" }}
                        ></i>
                        --javascript
                      </div>
                      <div
                        className="skillNode"
                        style={{ height: "1.7rem", fontFamily: "Roboto" }}
                      >
                     
                        <i
                          class="fab fa-node-js fa-lg"
                          style={{ color: "green" }}
                        ></i>
                        --node js
                      </div>
                      <div
                        className="skillDatabse"
                        style={{ height: "1.7rem", fontFamily: "Roboto" }}
                      >
                       
                        <i
                          class="fas fa-database fa-lg"
                          style={{ color: "green" }}
                        ></i>
                        --mongoDb
                      </div>
                    </div>
                    <div
                      className="effeicency"
                      style={{
                        height: "13.5rem",
                        width: "5.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        marginLeft: "0.2rem",
                      }}
                    >
                      <div style={{ color: "green" }}>80%</div>
                      <div style={{ color: "green" }}>95%</div>
                      <div style={{ color: "green" }}>90%</div>
                      <div style={{ color: "red" }}>75%</div>
                      <div style={{ color: "green" }}>80%</div>
                      <div style={{ color: "green" }}>80%</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div
                    className="cardHead"
                    style={{
                      textAlign: "center",
                      fontFamily: "Roboto",
                      marginTop: "0.2rem",
                    }}
                  >
                   
                    <h2>Education</h2>
                  </div>
                  <div className="cardDetails">
                    <div
                      className="subHead"
                      style={{ textAlign: "center", fontFamily: "Roboto" }}
                    >
                     
                      <i class="fas fa-school"></i> Formal Education
                    </div>
                    <div
                      className="tradiontnal"
                      style={{
                        letterSpacing: "-0.55px",
                        height: "3.5rem",
                        marginLeft: "5px",
                      }}
                    >
                      <div className="education" style={{ marginTop: "5px" }}>
                     
                        <span style={{ color: "green" }}>Passed</span> - 10th
                        class CICSE
                      </div>
                      <div className="education">
                      
                        <span style={{ color: "red" }}>Currently</span> -
                        non-med 11th class ISC
                      </div>
                    </div>
                    <div
                      className="subHead"
                      style={{ textAlign: "center", fontFamily: "Roboto" }}
                    >
                      Self Taught Education
                    </div>
                    <div
                      className="SelfEducation"
                      style={{
                        fontFamily: "Roboto",
                        color: "green",
                        height: "8.5rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        marginLeft: "1rem",
                      }}
                    >
                      <div className="education" style={{ marginTop: "5px" }}>
                        Entrepreneurship
                      </div>
                      <div className="education">Finance</div>
                      <div className="education">Business Management</div>
                      <div className="education">Leadership</div>
                      <div className="education">Programming</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ContactArrow">
            {/* <h4>Read More</h4> */}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              delay={50}
            >
              <IconButton>
                <ArrowDownwardIcon></ArrowDownwardIcon>
              </IconButton>
            </Link>
          </div>
        </div>
      </Element>
    </React.Fragment>
  );
};

export default About;
