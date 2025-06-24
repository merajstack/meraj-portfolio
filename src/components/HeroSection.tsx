
interface HeroSectionProps {
  scrollY: number;
}

export const HeroSection = ({ scrollY }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Earth Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`
        }}
      >
        <div className="w-96 h-96 mx-auto mt-32 rounded-full earth-glow animate-rotate-earth"
          style={{
            background: `radial-gradient(circle at 30% 30%, 
              rgba(69, 162, 158, 0.8), 
              rgba(31, 40, 51, 0.9), 
              rgba(11, 12, 16, 1))`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold font-montserrat mb-6 bg-gradient-to-r from-cyber-cyan to-steel-blue bg-clip-text text-transparent">
            MERAJ
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-cyber-cyan animate-glow">
            Aspiring AI/ML Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            BTech CSE | Certified in C++, Python, HTML & CSS | Learning JavaScript, MySQL, AI Engineering
          </p>
          
          <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <button className="bg-gradient-to-r from-cyber-cyan to-steel-blue text-dark-navy px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyber-cyan/50">
              Explore My Journey
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
