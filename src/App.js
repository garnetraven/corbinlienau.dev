import { Routes, Route } from "react-router-dom";

import Homepage from "./js/pages/homepage";
import About from "./js/pages/about";
import Contact from "./js/pages/contact";
import Projects from "./js/pages/projects";
import Articles from "./js/pages/articles";
import Notfound from "./js/pages/404";

import './css/fonts.css';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
