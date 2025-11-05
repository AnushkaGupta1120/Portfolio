export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fadeInLeft animation-delay-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              AG
            </h3>
            <p className="text-gray-400">Full Stack Developer & Software Engineer</p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeIn animation-delay-400">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block hover:text-blue-400 transition-colors duration-300 transform hover:translate-x-1"
                >
                  → {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-fadeInRight animation-delay-500">
            <h4 className="font-bold mb-4">Follow</h4>
            <div className="flex gap-4">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-slideInUp animation-delay-600">
          <p className="text-gray-400">
            © {currentYear} Anushka Gupta. All rights reserved.
          </p>
          <p className="text-gray-400">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
