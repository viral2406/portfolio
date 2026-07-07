import Photo from "../assets/photo.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="text-cyan-400 font-semibold text-lg mb-2">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Viral <span className="text-cyan-400">Darji</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl text-gray-300 font-semibold">
            Frontend Developer | React Developer
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-xl">
            I am a Diploma in Information Technology student who enjoys
            creating modern, responsive, and user-friendly web applications.
            My interests include React.js, JavaScript, Tailwind CSS, and UI/UX
            design. I enjoy learning new technologies and building real-world
            projects that solve practical problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/projects">
              <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-lg font-semibold transition">
                View Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-7 py-3 rounded-lg font-semibold transition">
                Contact Me
              </button>
            </Link>
          </div>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "React",
                "Java",
                "C++",
                "MySQL",
                "Git",
                "GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 border border-cyan-500 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center">

          {/* Profile Image */}
          <div className="relative">
            <img
              src={Photo}
              alt="Viral Darji"
              className="w-80 h-80 rounded-full border-4 border-cyan-500 object-cover shadow-2xl"
            />

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-cyan-500 px-6 py-2 rounded-full font-semibold">
              Available for Internship
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 gap-6 mt-12 w-full">

            <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-400">
                10+
              </h2>
              <p className="text-gray-400 mt-2">
                Academic Projects
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-400">
                2+
              </h2>
              <p className="text-gray-400 mt-2">
                Years Learning
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-400">
                8+
              </h2>
              <p className="text-gray-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center shadow-lg">
              <h2 className="text-3xl font-bold text-cyan-400">
                100%
              </h2>
              <p className="text-gray-400 mt-2">
                Passion to Learn
              </p>
            </div>

          </div>

          {/* Location */}
          <div className="mt-10 text-gray-400 text-lg">
            📍 Ahmedabad, Gujarat, India
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;