import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-200"> {/* Change background to gray */}
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-start text-left px-4">
        {/* About Section */}
        <section className="mt-12 max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <hr className="border-t-3 border-blue-400 mb-8" /> 
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            I'm a Graduate Researcher/SWE at Georgia Institute of Technology. I graduated from Western Governors University in 2025 with a BS in Computer Science. I mostly focus on vulnerability research, reverse engineering, and writing secure software.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            I have over 6 years of security and programming experience and a handful of personal projects.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mt-12 max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <hr className="border-t-3 border-blue-400 mb-8" /> 
          
          {/* Computer Security Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Computer Security</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Discovering security vulnerabilities and exploiting them in embedded, userspace, kernel, and web environments</li>
              <li>Reverse-engineering desktop applications and firmware with IDA Pro, Ghidra, gdb, QEMU, and WinDBG</li>
              <li>Developing security tooling in Python and C using glibc, IDAPython, LLVM, Unicorn, Capstone, Chrome DevTools API, and Win32 API</li>
              <li>Analyzing PCBs, dumping firmware, transceiving wired communication protocols (USB, SPI, I2C, etc.), and wireless communication protocols (anything FM, OFDM, or PSK)</li>
            </ul>
          </div>

          {/* Software Engineering Skills */}
          <div>
            <h3 className="text-xl font-medium mb-4">Software Engineering</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Building scalable back-end applications & tools in Python, C, C++, Rust, Java, and JavaScript</li>
              <li>Writing firmware for embedded systems using C, C++, FreeRTOS, Arduino, and MicroPython</li>
              <li>Managing data with PostgreSQL, SQLite, MongoDB, REST API's, and GraphQL</li>
              <li>Organizing large Git repositories with Jira tickets, pull requests, code reviews, and complex merges</li>
              <li>Deploying projects with GitHub, Docker, Vercel, AWS EC2, and the Google Cloud Platform</li>
              <li>Quickly learning new technologies, frameworks, and libraries while adapting to the needs of a project</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-12 max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <hr className="border-t-3 border-blue-400 mb-8" /> 
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Check out my projects on GitHub by clicking the icon in the footer or the link <a href="https://www.github.com/garnetraven" target="_blank" className="text-blue-400">here</a>.
          </p>
        </section>

        {/* Resumé Section */}
        <section className="mt-12 max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Resumé</h2>
          <hr className="border-t-3 border-blue-400 mb-8" /> 
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Below, you can find the latest copy of my resumé. You can also <a href="#" target="_blank" className="text-blue-400">download it</a>.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mt-12 max-w-4xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <hr className="border-t-3 border-blue-400 mb-8" /> 
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Email: <a href="mailto:13lienau@gmail.com" className="text-blue-400 hover:text-blue-600">13lienau@gmail.com</a>
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Discord: garnetraven
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
