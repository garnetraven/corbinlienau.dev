import { React } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/footer"
import Navbar from "../components/navbar";
import MainProjects from "../components/mainprojects";
import SideProjects from "../components/sideprojects";

import INFO from "../data/profile";

import "../../css/projects.css";

const Projects = () => {

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.primary.title}`}</title>
      </Helmet>
      <div className="page-content">
        <Navbar active="projects" />
        <div className="content-wrapper">
          <div className="projects-container">
            <div className="title projects-title">
              {INFO.projects.title}
            </div>
            <div className="subtitle projects-subtitle">
              {INFO.projects.description}
            </div>
            <div className="homepage-projects">
              <div className="midtitle homepage-midtitle">
                Main projects
              </div>
              <MainProjects />
            </div>
          </div>
          <div className="page-footer">
          <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;