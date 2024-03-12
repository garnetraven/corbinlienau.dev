import { React } from "react";

import Footer from "../components/footer"
import Navbar from "../components/navbar";

import INFO from "../data/profile";

import "../../css/contact.css"

const Contact = () => {

  return (
    <div className="page-content">
      <Navbar active="contact" />
      <div className="content-wrapper">
        <div className="contact-container">
            <div className="title contact-title">
              Ways to Get in Touch with Me
            </div>
            <div className="subtitle contact-subtitle">
              Thank you for your interest in reaching out to me. Your feedback, questions, and suggestions are always welcome. For any specific inquiries or comments, please don't hesitate
              to reach out via email at {" "}
              <a href={`mailto:${INFO.primary.email}`}>
                {INFO.primary.email}
              </a>
              . I strive to repsond to all messages within 24 hours. Alternatively, you can locate me on {" "}
              <a
								href={INFO.socials.linkedin}
								target="_blank"
							>
								{INFO.socials.linkedin}
							</a>
              . Once again, thank you for your interest, and I anticipate hearing from yousoon!
            </div>

            <div className="socials-container">
              <div className="contact-socials">
              {/*  <Socials /> */}
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

export default Contact;