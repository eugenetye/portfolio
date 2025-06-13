import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-16 px-6 bg-gradient-to-br from-gray-50 via-primary-50/30 to-cyan-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-primary-900/20 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities and connecting with fellow developers.
            <br />
            <span className="text-primary-600 dark:text-primary-400 font-semibold">Let's build something amazing together!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Email */}
          <div className="group animate-fadeInUp">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HiMail className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <div className="flex justify-center">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  eugenetye123[at]gmail[dot]com
                </span>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="group animate-fadeInUp" style={{animationDelay: '0.05s'}}>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaLinkedin className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/eugenetye/" 
                className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with me
                <HiExternalLink className="ml-2 text-lg" />
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="group animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaGithub className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">GitHub</h3>
              <a 
                href="https://github.com/eugenetye" 
                className="flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my repositories
                <HiExternalLink className="ml-2 text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-16 animate-fadeInUp">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Eugene Tye
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;