import { Routes, Route } from "react-router-dom";

import Homepage from "./js/pages/homepage";

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
