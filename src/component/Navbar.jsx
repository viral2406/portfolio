import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-cyan-400">
          Viral Darji
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-cyan-400">
            About
          </Link>

          <Link to="/education" className="hover:text-cyan-400">
            Education
          </Link>

          <Link to="/projects" className="hover:text-cyan-400">
            Projects
          </Link>

          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;