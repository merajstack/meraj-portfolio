
import { useEffect, useRef, useState } from 'react';

interface SkillsSectionProps {
  scrollY: number;
}

const certifiedSkills = [
  { name: 'C++', level: 'Certified', color: 'from-blue-500 to-blue-700' },
  { name: 'Python', level: 'Certified', color: 'from-green-500 to-green-700' },
  { name: 'HTML', level: 'Certified', color: 'from-orange-500 to-orange-700' },
  { name: 'CSS', level: 'Certified', color: 'from-purple-500 to-purple-700' }
];

const nonCertifiedSkills = [
  { name: 'Git', level: 'Proficient', color: 'from-red-500 to-red-700' },
  { name: 'GitHub', level: 'Proficient', color: 'from-gray-500 to-gray-700' },
  { name: 'Command Line', level: 'Proficient', color: 'from-yellow-500 to-yellow-700' },
  { name: 'Markdown', level: 'Proficient', color: 'from-indigo-500 to-indigo-700' }
];

const learningSkills = [
  { name: 'JavaScript', level: 'Learning', color: 'from-cyan-500 to-cyan-700' },
  { name: 'MySQL', level: 'Learning', color: 'from-teal-500 to-teal-700' },
  { name: 'MERN Stack', level: 'Learning', color: 'from-pink-500 to-pink-700' },
  { name: 'AI Engineering', level: 'Learning (IBM)', color: 'from-cyber-cyan to-steel-blue' }
];

export const SkillsSection = ({ scrollY }: SkillsSectionProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState<number>(0);
  const hasAnimatedRef = useRef(false); // 🔒 Instant-lock

  useEffect(() => {
    const skillsElement = document.getElementById('skills-section');
    if (!skillsElement || hasAnimatedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true; // ✅ Lock immediately
            setHasAnimated(true); // optional, for UI changes

            const totalSkills = certifiedSkills.length + nonCertifiedSkills.length + learningSkills.length;
            let count = 0;
            const interval = setInterval(() => {
              count++;
              setVisibleSkills(count);
              if (count >= totalSkills) {
                clearInterval(interval);
              }
            }, 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(skillsElement);

    return () => observer.disconnect(); // 💡 Clean up safely
  }, []);

  const SkillCard = ({ skill, index, category }: { skill: any; index: number; category: string }) => {
    const isVisible = visibleSkills > index;
    
    return (
      <div
        className={`skill-card rounded-xl p-6 text-center transform transition-all duration-500 ${
          isVisible ? 'animate-skill-emerge opacity-100' : 'opacity-0'
        }`}
        style={{
          animationDelay: `${index * 0.1}s`,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)'
        }}
      >
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white font-bold text-xl`}>
          {skill.name.charAt(0)}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
        <p className="text-sm text-gray-400">{skill.level}</p>
        <div className="mt-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            category === 'certified' ? 'bg-green-900 text-green-300' :
            category === 'proficient' ? 'bg-blue-900 text-blue-300' :
            'bg-orange-900 text-orange-300'
          }`}>
            {category.toUpperCase()}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills-section" className="py-20 px-6 relative overflow-hidden">
      {/* 3D Earth Animation */}
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
        style={{
          transform: `translateX(-50%) translateY(-50%) translateY(${scrollY * 0.3}px) rotateY(${scrollY * 0.1}deg)`
        }}
      >
        <div className="w-[600px] h-[600px] rounded-full earth-glow animate-rotate-earth"
          style={{
            background: `radial-gradient(circle at 40% 30%, 
              rgba(69, 162, 158, 0.6), 
              rgba(31, 40, 51, 0.8), 
              rgba(11, 12, 16, 0.9)),
              conic-gradient(from 0deg, 
              rgba(102, 252, 241, 0.1), 
              rgba(69, 162, 158, 0.2), 
              rgba(31, 40, 51, 0.3), 
              rgba(102, 252, 241, 0.1))`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-cyber-cyan">
            Skills Universe
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch my skills emerge from the digital cosmos like satellites orbiting Earth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-steel-blue mx-auto mt-6"></div>
        </div>

        {/* Certified Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">🏆 Certified Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifiedSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} category="certified" />
            ))}
          </div>
        </div>

        {/* Non-Certified Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">⚡ Proficient Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonCertifiedSkills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index + certifiedSkills.length} 
                category="proficient" 
              />
            ))}
          </div>
        </div>

        {/* Learning Skills */}
        <div>
          <h3 className="text-2xl font-bold text-orange-400 mb-8 text-center">🚀 Currently Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningSkills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                skill={skill} 
                index={index + certifiedSkills.length + nonCertifiedSkills.length} 
                category="learning" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
