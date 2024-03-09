import { React } from "react";

import Footer from "../components/footer"
import Navbar from "../components/navbar";

import "../../css/homepage.css";

const Homepage = () => {

  return (
    <div className="page-content">
      <Navbar active="home"/>
      <div className="homepage-container">
        <div className="homepage-intro">
          
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
  );
};

export default Homepage;
