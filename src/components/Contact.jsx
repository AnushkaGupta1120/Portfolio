import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-titleSlide">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-widthExpand"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInLeft animation-delay-300">
            {[
              { type: 'text', placeholder: 'Your Name', name: 'name' },
              { type: 'email', placeholder: 'Your Email', name: 'email' },
              { type: 'text', placeholder: 'Subject', name: 'subject' },
            ].map((field, index) => (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 outline-none transition-all duration-300 transform focus:scale-105 animate-slideInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                required
              />
            ))}

            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 outline-none transition-all duration-300 resize-none animate-slideInUp animation-delay-300"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slideInUp animation-delay-400 group"
            >
              {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8 animate-fadeInRight animation-delay-300">
            {[
              { icon: FiMail, label: 'Email', value: 'anushka.gupta@email.com', href: 'mailto:' },
              { icon: FiPhone, label: 'Phone', value: '+91 98765 43210', href: 'tel:' },
              { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/anushka-gupta', href: 'https://' },
              { icon: FiGithub, label: 'GitHub', value: 'github.com/anushka-gupta', href: 'https://' },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href + contact.value}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group animate-slideInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-blue-600 text-white rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{contact.label}</p>
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
