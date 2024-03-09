import { Routes, Route } from "react-router-dom";

import Homepage from "./js/pages/homepage";
import About from "./js/pages/about";
import Contact from "./js/pages/contact";
import Projects from "./js/pages/projects";
import Notfound from "./js/pages/404";

import './css/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
