import { React } from "react";

import Footer from "../components/footer"
import Navbar from "../components/navbar";

import "../../css/about.css";

const About = () => {

  return (
    <div className="page-content">
      <Navbar active="about"/>
      <div className="content-wrapper">
        <div className="about-container">
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;