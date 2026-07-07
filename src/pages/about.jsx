function About() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-cyan-400">
            About Me
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Get to know more about me, my journey, and my career goals.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-xl p-10">

          <h2 className="text-3xl font-bold mb-6">
            Hello, I'm <span className="text-cyan-400">Viral Darji 👋</span>
          </h2>

          <p className="text-gray-300 leading-8 text-lg mb-6">
            I am a passionate and enthusiastic Frontend Developer from
            Ahmedabad, Gujarat. I enjoy creating modern, responsive,
            and user-friendly web applications using React.js,
            JavaScript, and Tailwind CSS.
          </p>

          <p className="text-gray-300 leading-8 text-lg mb-6">
            I successfully completed my Diploma in Information Technology,
            where I developed a strong foundation in programming, database
            management, software engineering, networking, and web
            development. Currently, I am pursuing a Bachelor of Engineering
            in Computer Science to enhance my technical knowledge and gain
            deeper expertise in software development.
          </p>

          <p className="text-gray-300 leading-8 text-lg mb-6">
            I love learning new technologies and continuously improving my
            development skills by building real-world projects. I believe
            that practical experience is the best way to grow as a developer,
            so I regularly work on personal and academic projects.
          </p>

          <p className="text-gray-300 leading-8 text-lg">
            My long-term goal is to become a Full Stack Developer, contribute
            to innovative software solutions, and work with a professional
            development team where I can continue learning while creating
            impactful digital products.
          </p>

        </div>

        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Personal Information
            </h2>

            <div className="space-y-4 text-gray-300">

              <p><span className="font-semibold text-white">Name:</span> Viral Darji</p>

              <p><span className="font-semibold text-white">Location:</span> Ahmedabad, Gujarat, India</p>

              <p><span className="font-semibold text-white">Education:</span> Diploma in Information Technology</p>

              <p><span className="font-semibold text-white">Currently:</span> Pursuing B.E. Computer Science</p>

              <p><span className="font-semibold text-white">Email:</span> youremail@gmail.com</p>

              <p><span className="font-semibold text-white">Languages:</span> English, Hindi, Gujarati</p>

            </div>

          </div>

          {/* Career Objective */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              Career Objective
            </h2>

            <p className="text-gray-300 leading-8">
              Seeking an opportunity to work as a Frontend or Full Stack
              Developer where I can apply my technical skills, improve my
              knowledge, and contribute to the success of an organization.
              I am eager to work on challenging projects that help me grow
              professionally while delivering high-quality solutions.
            </p>

          </div>

        </div>

        {/* Interests */}
        <div className="bg-slate-900 rounded-2xl border border-slate-700 p-10 mt-12">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Interests & Hobbies
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:bg-cyan-500 transition hover:text-black">
              💻
              <h3 className="font-semibold mt-3">
                Web Development
              </h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:bg-cyan-500 transition hover:text-black">
              📚
              <h3 className="font-semibold mt-3">
                Learning New Technologies
              </h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:bg-cyan-500 transition hover:text-black">
              🧩
              <h3 className="font-semibold mt-3">
                Problem Solving
              </h3>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 text-center hover:bg-cyan-500 transition hover:text-black">
              🚀
              <h3 className="font-semibold mt-3">
                Building Projects
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;