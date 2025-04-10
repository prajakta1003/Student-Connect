import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/navbar";
import Features from "./pages/Features"
import Docs from "./pages/Docs"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
