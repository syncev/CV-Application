import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useLocation
} from "react-router-dom";
import Processed from "./Pages/Processed.jsx";
import CVForm from "./Pages/CVForm";
import About from "./Pages/About";
import { useEffect, useState } from "react";

function Home() {
  return (
    <div>
      <h1>CV Generator</h1>
      <p>
        This CV Generator helps you make a nice CV with different styles, just
        go to the next section and fill the spaces with the info you want in
        your CV.
      </p>
      <button><Link to="/CVForm">Get Started</Link></button>
    </div>
  );
}

function App() {

  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CVForm" element={<CVForm />} />
        <Route path="/Processed" element={<Processed />} />
        <Route path="/About" element={<About/>}/>
      </Routes>

      
      
    </Router>
  );
}

export default App;
