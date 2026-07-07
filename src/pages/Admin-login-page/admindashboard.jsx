import { Link } from "react-router";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaBriefcase,
  FaUserGraduate,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    {
      title: "Projects",
      value: "5",
      icon: <FaProjectDiagram size={28} />,
    },
    {
      title: "Skills",
      value: "10",
      icon: <FaCode size={28} />,
    },
    {
      title: "Education",
      value: "2",
      icon: <FaUserGraduate size={28} />,
    },
    {
      title: "Messages",
      value: "12",
      icon: <FaEnvelope size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-slate-900 text-white z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-700">
          <h2 className="text-xl font-bold">Portfolio</h2>

          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        <div className=" p-4 flex flex-col gap-6">
         
         <Link to={"/about"}> <div className="flex items-center gap-4 cursor-pointer hover:text-cyan-400">
            <FaUser /> About
          </div>
          </Link>

         <Link to={"/education"}> <p className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
            <FaCode /> Skills
          </p>
          </Link>

          <Link to={"/experience"}> <p className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
            <FaUserGraduate /> Education
          </p>
          </Link>

           <Link to={"/project"}> < p className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
            <FaBriefcase /> Experience
          </p>
          </Link>

          <Link to={"/experience"}><p className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
            <FaProjectDiagram /> Projects
          </p>
          </Link>

          <li className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
            <FaEnvelope /> Contact
          </li>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "ml-72" : "ml-0"
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center gap-4 shadow-lg">
          <button onClick={() => setIsOpen(true)}>
            <FaBars size={28} />
          </button>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Portfolio Dashboard
            </h1>

            <p className="text-gray-300 mt-2">
              Welcome back, Viral Darji 👋
            </p>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500">{item.title}</p>
                    <h2 className="text-3xl font-bold mt-2">
                      {item.value}
                    </h2>
                  </div>

                  <div className="bg-cyan-100 text-cyan-600 p-4 rounded-full">
                    {item.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Admin Profile
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Name:</strong> Viral Darji
              </p>

              <p>
                <strong>Role:</strong> Frontend Developer
              </p>

              <p>
                <strong>Technology:</strong> React JS, Tailwind CSS,
                JavaScript
              </p>

              <p>
                <strong>Current Status:</strong> IT Student &
                Web Development Intern
              </p>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Recent Projects
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Project</th>
                    <th className="text-left py-3">Technology</th>
                    <th className="text-left py-3">Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="py-3">Restaurant Website</td>
                    <td>React + Tailwind CSS</td>
                    <td className="text-green-600 font-semibold">
                      Completed
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3">Coffee Bar Website</td>
                    <td>HTML, CSS, JavaScript</td>
                    <td className="text-green-600 font-semibold">
                      Completed
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3">Sortify Website</td>
                    <td>React JS</td>
                    <td className="text-blue-600 font-semibold">
                      Ongoing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold">
              Add Project
            </button>

            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
              Manage Skills
            </button>

            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
              View Messages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;