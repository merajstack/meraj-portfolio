
export const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-cyber-cyan">
            Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building the future, one project at a time
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-steel-blue mx-auto mt-6"></div>
        </div>

        {/* Project Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="w-full h-48 bg-gradient-to-br from-space-gray to-dark-navy rounded-lg mb-4 flex items-center justify-center">
                <div className="text-cyber-cyan text-4xl">🚀</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Project {project}
              </h3>
              <p className="text-gray-400 mb-4">
                Coming soon... Currently working on exciting projects that will showcase my AI/ML skills and full-stack development capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyber-cyan/20 text-cyber-cyan rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-steel-blue/20 text-steel-blue rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  AI/ML
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyber-cyan to-steel-blue text-dark-navy px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
