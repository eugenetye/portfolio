import { useTypewriter } from '../hooks/useTypewriter';

const About = () => {
  const titles = ['Software Engineer', 'Full Stack Developer', 'Avid Golfer', 'Tennis Enthusiast', 'Food Lover'];
  const currentTitle = useTypewriter(titles, 100, 80, 1000);
  return (
    <>
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="animate-fadeInUp">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Profile picture on the left */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-48 h-56 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl overflow-hidden">
                    <img 
                      src="/profile.png"
                      alt="Eugene Tye" 
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-400 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold" style={{display: 'none'}}>
                      ET
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Title and description taking up 2 columns */}
              <div className="md:col-span-2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-primary-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6 animate-slideInFromLeft min-h-[1.2em]">
                  {currentTitle}
                  <span className="animate-pulse">|</span>
                </h1>
                <p className="text-xl md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Passionate about creating <span className="text-primary-600 dark:text-primary-400 font-semibold">elegant solutions</span> to complex problems. 
                  I build modern software with <span className="text-blue-600 dark:text-blue-400 font-semibold">clean code</span> and thoughtful design.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-cyan-600 mx-auto md:mx-0 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="pt-24 pb-16 px-6 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInFromLeft">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-cyan-600 rounded-full mr-4"></span>
                About Me
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My name's Wei Shun but people usually call me Eugene.  I have always been fascinated by the world of technology and am excited to design and build software that makes a difference in people's lives.

I am passionate about learning new technologies and am always seeking out opportunities to expand my knowledge and skills.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not working, you can find me hanging out with friends, building fun side projects, playing 3.0 tennis, or enjoying a round of golf.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fadeInUp">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Quick Facts
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-lg">
                    <span className="text-2xl mr-4">🧑🏻‍💻</span>
                    <span>Currently a Software Engineer at <span className="text-primary-600 dark:text-primary-400 font-semibold">Revision Autonomy</span></span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-lg">
                    <span className="text-2xl mr-4">📍</span>
                    <span>Based in <span className="text-primary-600 dark:text-primary-400 font-semibold">Kalamazoo, MI</span></span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-lg">
                    <span className="text-2xl mr-4">💼</span>
                    <span><span className="text-primary-600 dark:text-primary-400 font-semibold">2</span> years of professional experience</span>
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-300 text-lg">
                    <span className="text-2xl mr-4">🎓</span>
                    <span>Computer Science graduate from <span className="text-primary-600 dark:text-primary-400 font-semibold">Western Michigan University</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;