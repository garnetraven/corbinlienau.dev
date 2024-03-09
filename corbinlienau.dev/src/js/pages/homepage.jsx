import React from "react";

import Footer from "../components/footer"
import Navbar from "../components/navbar";

const Homepage = () => {

  return (
    <div>
      <div className="page-navbar">
        <Navbar />
      </div>
      <div className="page-footer">
	      <Footer />
      </div>
    </div>
  );
};

export default Homepage;
