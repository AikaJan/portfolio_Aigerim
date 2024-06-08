import "./styles/main.css";
import "./styles/reset.css";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";
import SelfProject from "./pages/SelfProject.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/skrollToTop.js";
import Repos from "./components/repos/Repos.js";

function App() {
  const username = "AikaJan";
  const token =
    "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";

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/self-project/:id" element={<SelfProject />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/repos"
            element={<Repos username={username} token={token} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
