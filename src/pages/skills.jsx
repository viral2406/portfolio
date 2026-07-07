import React from "react";

const technicalSkills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "JavaScript", level: "75%" },
  { name: "React JS", level: "70%" },
  { name: "Java", level: "80%" },
  { name: "C++", level: "75%" },
  { name: "C Programming", level: "80%" },
  { name: "MySQL", level: "75%" },
  { name: "Git & GitHub", level: "70%" },
];

const tools = [
  "Visual Studio Code",
  "GitHub",
  "MySQL Workbench",
  "Canva",
  "Figma",
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Quick Learner",
  "Time Management",
  "Adaptability",
];

const Skills = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-blue-700">
            My Skills
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Technical skills and knowledge gained during my Diploma in
            Information Technology.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technical Skills
          </h2>

          <div className="space-y-5">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-600">{skill.level}</span>
                </div>

                <div className="w-full bg-gray-300 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Development Tools
          </h2>

          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Soft Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center font-semibold text-gray-700 hover:bg-blue-600 hover:text-white transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;