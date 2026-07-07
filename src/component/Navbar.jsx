import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Viral Darji
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link to="/education" className="hover:text-cyan-400 transition">
            Education
          </Link>

          <Link to="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link to="/experience" className="hover:text-cyan-400 transition">
            Experience
          </Link>

          <Link to="/skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>

          <Link to="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>

          <Link to="/adminlogin">
            <button className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition">
              Admin
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-slate-700"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-slate-700"
          >
            About
          </Link>

          <Link
            to="/education"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-slate-700"
          >
            Education
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-slate-700"
          >
            Projects
          </Link>

          <Link
            to="/experience"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-slate-700"
          >
            Experience
          </Link>

          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-slate-700"
          >
            Skills
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 hover:bg-slate-700"
          >
            Contact
          </Link>

          <div className="px-6 py-4">
            <Link to="/adminlogin" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg transition">
                Admin
              </button>
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;