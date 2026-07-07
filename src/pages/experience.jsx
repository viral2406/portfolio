import React from "react";

const experiences = [
  {
    title: "Diploma in Information Technology",
    organization: "Government Polytechnic College",
    duration: "2023 - Present",
    description:
      "Currently pursuing a Diploma in Information Technology. Gaining knowledge in programming, web development, database management, networking, and software engineering through academic coursework and practical projects.",
    skills: [
      "C",
      "C++",
      "Java",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MySQL",
    ],
  },
  {
    title: "Web Development Projects",
    organization: "Academic Projects",
    duration: "2024 - Present",
    description:
      "Designed and developed responsive websites and mini-projects using HTML, CSS, Tailwind CSS, JavaScript, and React. Focused on creating user-friendly interfaces and learning modern web development practices.",
    skills: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Programming Practice",
    organization: "Self Learning",
    duration: "Ongoing",
    description:
      "Improving programming and problem-solving skills by practicing coding problems and building personal projects using Java, C++, and React.",
    skills: [
      "Problem Solving",
      "Java",
      "C++",
      "React",
      "MySQL",
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700">
            My Experience
          </h2>
          <p className="text-gray-600 mt-3">
            My learning journey as a Diploma in Information Technology student.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-8 border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {exp.title}
                  </h3>

                  <p className="text-blue-600 font-medium">
                    {exp.organization}
                  </p>
                </div>

                <span className="mt-3 md:mt-0 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {exp.duration}
                </span>
              </div>

              <p className="mt-5 text-gray-600 leading-7">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;