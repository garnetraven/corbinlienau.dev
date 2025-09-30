import React from "react";
import Navbar from "../components/navbar";
import Boids from "../components/boids";
import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-200"> {/* Change background to gray */}
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="mt-12">
            <Boids />
        </div>

        <p className="mt-12 text-lg md:text-lg max-w-3xl">
          Graduate Researcher and SWE at Georgia Institute of Technology
        </p>

        <p className="mt-4 mb-16 text-lg md:text-lg max-w-3xl">
          Working with computer networks and computer security for vulnerability
          detection and exploitation.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
