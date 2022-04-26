import Footer from "./components/Footer";
import Home from "./components/Home";

import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";

import Guideline from "./components/Guideline";
import About from "./components/About";
import Contact from "./components/Contact";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
</style>;

function App() {
  return (
    <Router>
      <div className="App">
        <div className="mx-auto px-4 min-h-screen bg-gradient-to-r from-slate-500 to-yellow-100">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/guideline" element={<Guideline />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
