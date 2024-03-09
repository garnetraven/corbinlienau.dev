import { React } from "react";

import Footer from "../components/footer";
import Navbar from "../components/navbar";

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
            
            </div>
          </div>
          <div className="homepage-socials">
        
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
