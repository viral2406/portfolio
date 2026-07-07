import React from "react";

function Education() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-cyan-400">
            My Education
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            My academic journey in Information Technology and Computer Science.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10">

          {/* Diploma */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-8 hover:border-cyan-400 transition">

            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  Diploma in Information Technology
                </h2>

                <h3 className="text-xl mt-2 text-gray-300">
                  Government Polytechnic, Ahmedabad
                </h3>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div>
                <h4 className="text-xl font-semibold mb-3 text-cyan-300">
                  Course Details
                </h4>

                <ul className="space-y-2 text-gray-300">
                  <li>📅 Duration: 3 Years</li>
                  <li>🎓 Qualification: Diploma in IT</li>
                  <li>📍 Gujarat, India</li>
                  <li>📊 CGPA/Percentage: 8.5 CGPA (Example)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-cyan-300">
                  Core Subjects
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Programming in C",
                    "C++",
                    "Java",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Database Management",
                    "MySQL",
                    "Software Engineering",
                    "Computer Networks",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="bg-cyan-600 px-3 py-2 rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                Learning Outcomes
              </h4>

              <p className="text-gray-300 leading-8">
                During my diploma, I built a strong foundation in software
                development, programming languages, database management,
                networking, and web technologies. I completed several academic
                projects that enhanced my practical knowledge of frontend
                development, problem-solving, and teamwork.
              </p>
            </div>

          </div>

          {/* Bachelor's Degree */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-lg p-8 hover:border-cyan-400 transition">

            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  Bachelor of Engineering (Computer Science)
                </h2>

                <h3 className="text-xl mt-2 text-gray-300">
                  Your Engineering College Name
                </h3>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Currently Pursuing
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div>
                <h4 className="text-xl font-semibold mb-3 text-cyan-300">
                  Course Details
                </h4>

                <ul className="space-y-2 text-gray-300">
                  <li>📅 Duration: 2025 – Present</li>
                  <li>🎓 Degree: B.E. Computer Science</li>
                  <li>📍 Gujarat, India</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-cyan-300">
                  Current Learning
                </h4>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React.js",
                    "Node.js",
                    "Python",
                    "Data Structures",
                    "Algorithms",
                    "Operating Systems",
                    "Cloud Computing",
                    "Cyber Security",
                    "Machine Learning",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="bg-cyan-600 px-3 py-2 rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                Goal
              </h4>

              <p className="text-gray-300 leading-8">
                I am currently expanding my knowledge in advanced software
                development, full-stack web technologies, cloud computing,
                and modern programming practices while building real-world
                applications and improving my technical and problem-solving
                skills.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;