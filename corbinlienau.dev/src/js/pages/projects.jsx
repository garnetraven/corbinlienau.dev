import { React } from "react";

import Footer from "../components/footer"
import Navbar from "../components/navbar";

const Projects = () => {

  return (
    <div className="page-content">
      <Navbar active="projects" />
      <div className="projects-container">
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;