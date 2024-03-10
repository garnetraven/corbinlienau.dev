import { React } from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";


import INFO from "../data/profile"

import "../../css/homepage.css";

const Homepage = () => {

  return (
    <div className="page-content">
      <Navbar active="home"/>
      <div className="content-wrapper">
        <div className="homepage-container">
          <div className="homepage-intro">
            <div className="title homepage-title">
              {INFO.homepage.title}
            </div>
            <div className="subtitle homepage-subtitle">
              {INFO.homepage.description}
            </div>
          </div>
          <div className="homepage-socials">
            <a href={INFO.socials.github} target="_blank"><FontAwesomeIcon icon={faGithub} className="homepage-social-icon"/></a>
            <a href={INFO.socials.linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon"/></a>
            <a href={`https://mail.google.com/mail/?view=cm&source=mailto&to=${INFO.primary.email}`} target="_blank"><FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon"/></a>
          </div>
          <div className="homepage-projects">

          </div>
          <div className="homepage-articles">

          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;