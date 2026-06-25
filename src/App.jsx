import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Projects from "./pages/project";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-950 text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;