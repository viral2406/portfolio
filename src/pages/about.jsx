function About() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          About Me
        </h1>
  
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
          <p className="text-gray-300 text-lg leading-8 mb-6">
            Hello! I'm <span className="text-cyan-400 font-semibold">Viral Darji</span>,
            a passionate Frontend Developer from Ahmedabad, Gujarat. I enjoy
            building modern, responsive, and user-friendly web applications
            using React.js and JavaScript.
          </p>
  
          <p className="text-gray-300 text-lg leading-8 mb-6">
            I have successfully completed my Diploma in Information Technology
            and am currently pursuing a Bachelor's degree in Computer Science
            Engineering (CSE). My academic journey has strengthened my
            understanding of programming, web development, and software design
            principles.
          </p>
  
          <p className="text-gray-300 text-lg leading-8 mb-6">
            I am continuously learning new technologies and improving my skills
            in frontend development. I enjoy transforming ideas into interactive
            digital experiences and solving real-world problems through clean
            and efficient code.
          </p>
  
          <p className="text-gray-300 text-lg leading-8">
            My goal is to grow as a Full Stack Developer, contribute to
            innovative projects, and create impactful web applications that
            provide excellent user experiences.
          </p>
        </div>
  
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-6 text-cyan-400">
            Skills
          </h2>
  
          <div className="flex flex-wrap gap-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "GitHub",
              "Responsive Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default About;