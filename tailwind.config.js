/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#7c3aed',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        blob: 'blob 7s infinite',
        fadeIn: 'fadeIn 0.6s ease-out',
        fadeInLeft: 'fadeInLeft 0.8s ease-out',
        fadeInRight: 'fadeInRight 0.8s ease-out',
        slideInUp: 'slideInUp 0.8s ease-out',
        slideInDown: 'slideInDown 0.8s ease-out',
        slideInLeft: 'slideInLeft 0.8s ease-out',
        slideInRight: 'slideInRight 0.8s ease-out',
        scaleIn: 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        titleSlide: 'titleSlide 0.8s ease-out',
        floatUp: 'floatUp 3s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        bounceSlow: 'bounceSlow 3s ease-in-out infinite',
        spinSlow: 'spinSlow 3s linear infinite',
        rotateIn: 'rotateIn 0.6s ease-out',
        widthExpand: 'widthExpand 0.8s ease-out',
        fillWidth: 'fillWidth 1.5s ease-out',
        gradientShift: 'gradientShift 3s ease infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.8)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        titleSlide: {
          'from': { opacity: '0', transform: 'translateY(20px) scaleX(0.9)' },
          'to': { opacity: '1', transform: 'translateY(0) scaleX(1)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spinSlow: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        rotateIn: {
          'from': { opacity: '0', transform: 'rotate(-180deg) scale(0)' },
          'to': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        widthExpand: {
          'from': { width: '0' },
          'to': { width: '80px' },
        },
        fillWidth: {
          'from': { width: '0%' },
          'to': { width: 'var(--target-width, 100%)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
