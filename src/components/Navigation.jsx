import { useTheme } from '../hooks/useTheme';

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg z-50 border-b border-white/20 dark:border-gray-800/50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
            Eugene Tye
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium relative group"
              >
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium relative group"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gradient-to-r from-primary-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-300 hover:from-primary-200 hover:to-cyan-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Toggle theme"
            >
              <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;