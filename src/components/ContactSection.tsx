
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-cyber-cyan">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects or discuss opportunities?
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-steel-blue mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-steel-blue rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:meraj.md5862@gmail.com" className="text-white hover:text-cyber-cyan transition-colors">
                      meraj.md5862@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-steel-blue rounded-full flex items-center justify-center">
                    💼
                  </div>
                  <div>
                    <p className="text-gray-400">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/meraj-mohammed-526564362/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyber-cyan transition-colors"
                    >
                      linkedin.com/in/meraj-mohammed
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyber-cyan to-steel-blue rounded-full flex items-center justify-center">
                    🐙
                  </div>
                  <div>
                    <p className="text-gray-400">GitHub</p>
                    <a 
                      href="https://github.com/merajstack" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyber-cyan transition-colors"
                    >
                      github.com/merajstack
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-space-gray/50 border-cyber-cyan/30 text-white placeholder-gray-400 focus:border-cyber-cyan"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-space-gray/50 border-cyber-cyan/30 text-white placeholder-gray-400 focus:border-cyber-cyan"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-space-gray/50 border-cyber-cyan/30 text-white placeholder-gray-400 focus:border-cyber-cyan resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyber-cyan to-steel-blue text-dark-navy font-semibold py-3 hover:scale-105 transition-all duration-300"
              >
                Send Message 🚀
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-space-gray">
        <p className="text-gray-400">
          © 2025 Meraj. Crafted with passion for AI/ML Engineering.
        </p>
      </div>
    </section>
  );
};
