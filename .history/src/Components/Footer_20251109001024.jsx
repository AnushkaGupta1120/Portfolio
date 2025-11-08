export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-navy text-gray-700 dark:text-softText py-10 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-mutedIndigo bg-clip-text text-transparent mb-3">
          AG • Portfolio
        </h3>
        <p>Full Stack Developer & UI/UX Engineer</p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          © {year} Anushka Gupta — Built with ❤️ using React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
