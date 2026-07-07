import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Education from "./pages/education";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Skills from "./pages/skills";
import Adminlogin from "./pages/Admin-login-page/adminlogin";
import Admindashboard from "./pages/Admin-login-page/admindashboard";
import MainLayout from "./Layout/mainlayout";

function App() {
  return (
    <BrowserRouter>
    

        <Routes>
          <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/skills" element={<Skills/>} />
          </Route>
          <Route path="/adminlogin" element={<Adminlogin/>} />
          <Route path="/admindashboard" element={<Admindashboard/>} />




        </Routes>
      
    </BrowserRouter>
  );
}

export default App;