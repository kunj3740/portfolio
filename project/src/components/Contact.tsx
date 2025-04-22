import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Linkedin, Github, Code } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91-8320947770',
      link: 'tel:+918320947770',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'kunjdave694@gmail.com',
      link: 'mailto:kunjdave694@gmail.com',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kunj-dave',
      link: 'https://linkedin.com/in/kunj1903',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/kunjdave',
      link: 'https://github.com/kunj3740',
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: 'LeetCode',
      value: 'leetcode.com/kunj_dave',
      link: 'https://leetcode.com/kunjdave',
    },
  ];
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-950 opacity-0">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
        </p>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-500/20 border border-green-500 text-green-500 rounded-lg p-4 mb-6">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <a 
                          href={info.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Looking For</h3>
                <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 p-4 rounded-lg border border-purple-500/30">
                  <p className="text-white font-medium mb-2">Softwear Development Internship</p>
                  <p className="text-gray-300 text-sm">
                    Passionate about building scalable, high-performance web applications using modern technologies and integrating gen AI and make it Secure. Open to remote or on-site opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;