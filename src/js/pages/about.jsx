import { React } from "react";

import Footer from "../components/footer"
import Navbar from "../components/navbar";
import Socials from "../components/socials";

import "../../css/about.css";

import INFO from "../data/profile";

const About = () => {

  return (
    <div className="page-content">
      <Navbar active="about"/>
      <div className="content-wrapper">
        <div className="about-container">
          <div className="about-content">
            <div className="about-content-left-side">
              <div className="title about-title">
                {INFO.about.title}
              </div>

              <div className="subtitle about-subtitle">
                {INFO.about.description}
              </div>
            </div>

            <div className="about-content-right-side">
              <div className="about-socials">
                <Socials />
              </div>
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
