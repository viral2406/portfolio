function Contact() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact
        </h1>
  
        <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
          <p className="mb-4">
            📧 Email:
            <a
              href="mailto:viraldarji2406@gmail.com"
              className="text-cyan-400 ml-2"
            >
              viraldarji2406@gmail.com
            </a>
          </p>
  
          <p>
            💻 GitHub:
            <a
              href="https://github.com/viral2406"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 ml-2"
            >
              github.com/viral2406
            </a>
          </p>
        </div>
      </section>
    );
  }
  
  export default Contact;