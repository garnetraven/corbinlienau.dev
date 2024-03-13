import { Routes, Route } from "react-router-dom";

import Homepage from "./js/pages/homepage";
import About from "./js/pages/about";
import Contact from "./js/pages/contact";
import Projects from "./js/pages/projects";
import Notfound from "./js/pages/404";
import './css/App.css';

{ /* import Articles from "./js/pages/articles";  add later on */}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/articles" element={<Articles />} /> Add later on*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
