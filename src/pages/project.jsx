import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Coffee Bar Website",
      image: "/coffee.png",
      description:
        "A modern and fully responsive coffee shop website designed to provide customers with an attractive online experience. The website includes a beautiful landing page, menu section, featured products, customer testimonials, and contact information.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],

      features: [
        "Responsive Design",
        "Modern UI",
        "Coffee Menu",
        "Gallery Section",
        "Contact Form",
      ],

      github: "https://github.com/yourusername/coffee-bar",
      demo: "https://coffee-demo.netlify.app",
      status: "Completed",
    },

    {
      title: "Sportify Website",
      image: "/sportify.png",
      description:
        "A responsive sports equipment shopping website developed with a clean user interface. It showcases sports products, categories, offers, and product details while providing an engaging shopping experience.",

      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
      ],

      features: [
        "Responsive Layout",
        "Product Cards",
        "Category Filter",
        "Modern UI",
        "Interactive Design",
      ],

      github: "https://github.com/yourusername/sportify",
      demo: "https://sportify-demo.netlify.app",
      status: "Completed",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-cyan-400">
            My Projects
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Here are some of the projects I developed during my Diploma in
            Information Technology to improve my frontend development skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition duration-300 shadow-lg hover:shadow-cyan-500/20"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <div className="flex justify-between items-center">

                  <h2 className="text-3xl font-bold text-cyan-400">
                    {project.title}
                  </h2>

                  <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </span>

                </div>

                <p className="text-gray-300 mt-5 leading-8">
                  {project.description}
                </p>

                {/* Technologies */}

                <h3 className="text-xl font-semibold mt-6 mb-3">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-cyan-600 px-3 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Features */}

                <h3 className="text-xl font-semibold mt-8 mb-3">
                  Features
                </h3>

                <ul className="list-disc list-inside text-gray-300 space-y-2">

                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}

                </ul>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-5 py-3 rounded-lg"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;