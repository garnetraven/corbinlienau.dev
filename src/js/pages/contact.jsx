import { React } from "react";

import Footer from "../components/footer"
import Navbar from "../components/navbar";

const Contact = () => {

  return (
    <div className="page-content">
      <Navbar active="contact" />
      <div className="contact-container">
        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;