const Projects = () => {
  const projects = [
    {
      title: "BroncoNav",
      description: "Full-stack ride scheduling platform for students with disabilities at WMU. Supports 100+ active users with React/TypeScript frontend and FastAPI/PostgreSQL backend.",
      tech: ["React", "TypeScript", "Vite", "FastAPI", "Supabase", "PostgreSQL", "Cloudflare", "UptimeRobot"],
      demo: "https://bronconav.com/"
    },
    {
      title: "Lane Detection in Snow",
      description: "Customer-facing web app for automakers to upload snowy road images and run real-time lane detection via ONNX PyTorch model with <1s inference latency.",
      tech: ["Next.js", "PyTorch", "FastAPI", "Docker", "AWS ECR", "AWS Lambda", "AWS API Gateway", "ONNX Runtime", "OpenCV", "GitHub Actions"],
      demo: "https://reva-demo-app.vercel.app/"
    },
    {
      title: "AI News Aggregator",
      description: "Go-based microservices for Reddit and RSS content scraping, and AI-powered summarization using OpenAI GPT-4. Deployed on Google Cloud Run with Kubernetes orchestration.",
      tech: ["Go", "Docker", "Redis", "OpenAI GPT-4", "Google Cloud Run", "Kubernetes", "Terraform"],
      github: "https://github.com/eugenetye/news-aggregator"
    }
  ];

  return (
    <section id="projects" className="pt-24 pb-16 px-6 bg-gradient-to-br from-white via-primary-50/30 to-cyan-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/10 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-600 bg-clip-text text-transparent mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that showcase my <span className="text-primary-600 dark:text-primary-400 font-semibold">skills and experience</span> in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group animate-fadeInUp h-full" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-xl relative h-full">
                
                <div className="p-8 relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-6 bg-gradient-to-b from-primary-500 to-cyan-600 rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium border border-primary-100 dark:border-primary-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-6 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium group/link"
                      >
                        <span className="mr-2">🔗</span>
                        <span className="group-hover/link:translate-x-1 transition-transform">GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium group/link"
                      >
                        <span className="mr-2">🚀</span>
                        <span className="group-hover/link:translate-x-1 transition-transform">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;