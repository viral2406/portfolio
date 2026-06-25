function Projects() {
    const projects = [
      {
        title: "Coffee Bar Website",
        description:
          "Modern coffee shop website with responsive design and attractive user interface.",
      },
      {
        title: "Sportify Website",
        description:
          "Sports equipment website with product sections and responsive frontend design.",
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          Projects
        </h1>
  
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {project.title}
              </h2>
  
              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;