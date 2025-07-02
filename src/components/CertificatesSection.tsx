
export const CertificatesSection = () => {
  const certificates = [
    {
      title: "C++ Programming",
      issuer: "BIET Learning Systems.",
      date: "2024",
      color: "from-blue-500 to-blue-700",
      link: "https://certificate-merajstacks-projects.vercel.app/"
    },
    {
      title: "Python Programming",
      issuer: "HackerRank.", 
      date: "2024",
      color: "from-green-500 to-green-700",
      link: "https://www.hackerrank.com/certificates/iframe/a7b26ec538d0"
    },
    {
      title: "HTML & CSS",
      issuer: "freeCodeCamp.",
      date: "2024", 
      color: "from-orange-500 to-purple-500",
      link: "https://www.freecodecamp.org/certification/meraj_01/responsive-web-design"
    },
    {
      title: "AI Engineering (In Progress)",
      issuer: "IBM",
      date: "2024",
      color: "from-cyber-cyan to-steel-blue",
      link: null
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-cyber-cyan">
            Certificates
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Validated expertise through professional certifications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-steel-blue mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.title}
              className="skill-card rounded-xl p-8 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white text-2xl font-bold mr-4`}>
                  🏆
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-cyber-cyan font-medium">{cert.date}</span>
                {cert.link ? (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-steel-blue hover:text-cyber-cyan transition-colors duration-300"
                  >
                    View Certificate →
                  </a>
                ) : (
                  <span className="text-gray-500">
                    Certificate Pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
