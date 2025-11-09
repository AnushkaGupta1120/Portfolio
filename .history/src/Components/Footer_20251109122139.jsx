export default function Footer() {
  return (
    <footer
      className="bg-gray-100 dark:bg-[#0b0c10] 
                 text-gray-700 dark:text-gray-400 
                 text-center py-6 border-t border-[#f4a261]/20 
                 transition-colors duration-500"
    >
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#f4a261]">Anushka Gupta</span> | Built with ❤️ using{" "}
        <span className="font-medium text-indigo-500 dark:text-indigo-300">React</span> &{" "}
        <span className="font-medium text-sky-500 dark:text-sky-300">Tailwind</span>
      </p>
    </footer>
  );
}
