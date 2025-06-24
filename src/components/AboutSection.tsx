
export const AboutSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-cyber-cyan">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-steel-blue mx-auto"></div>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
            I'm <span className="text-cyber-cyan font-semibold">Meraj</span>, a passionate Computer Science student dedicated to mastering AI, ML, and full-stack development. I'm currently working on building real-world skills, and certified in foundational languages like C++, Python, and web technologies.
          </p>
          <br />
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 text-center">
            With a strong focus on <span className="text-steel-blue font-semibold">projects and practical learning</span>, I aim to grow into a top-performing AI Engineer. My journey combines technical expertise with creative problem-solving, always pushing the boundaries of what's possible in technology.
          </p>

          {/* Stats or highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-cyan mb-2">4+</div>
              <div className="text-gray-400">Certified Skills</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-steel-blue mb-2">BTech</div>
              <div className="text-gray-400">Computer Science</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-cyan mb-2">∞</div>
              <div className="text-gray-400">Learning Mindset</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
