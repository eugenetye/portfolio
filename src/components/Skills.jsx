import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaGit,
  FaLinux,
  FaDocker,
  FaAws,
  FaRProject
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGo,
  SiC,
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiOnnx,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiPostman,
  SiGnubash,
  SiKubernetes,
  SiGooglecloud,
  SiTerraform,
  SiRos,
  SiMysql,
  SiNvidia
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React Native", icon: FaReact },
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "Node.js", icon: FaNodeJs },
        { name: "Go", icon: SiGo },
        { name: "C/C++", icon: SiCplusplus }, // or SiC or SiCplusplus separately
        { name: "Express", icon: SiExpress },
        { name: "FastAPI", icon: SiFastapi },
        { name: "PHP", icon: FaPhp },
        { name: "MySQL", icon: SiMysql }
      ]
    },
    {
      title: "Machine Learning/AI",
      skills: [
        { name: "PyTorch", icon: SiPytorch },
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Keras", icon: SiKeras },
        { name: "OpenCV", icon: SiOpencv },
        { name: "Pandas", icon: SiPandas },
        { name: "NumPy", icon: SiNumpy },
        { name: "ONNX Runtime", icon: SiOnnx },
        { name: "R", icon: FaRProject }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "GCP", icon: SiGooglecloud },
        { name: "Docker", icon: FaDocker },
        { name: "Kubernetes", icon: SiKubernetes },
        { name: "Terraform", icon: SiTerraform },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "Firebase", icon: SiFirebase },
        { name: "Git", icon: FaGit },
        { name: "Postman", icon: SiPostman },
        { name: "Linux", icon: FaLinux },
        { name: "ROS", icon: SiRos },
        { name: "CUDA", icon: SiNvidia }
      ]
    }
  ];

  return (
    <section id="skills" className="pt-24 pb-16 px-6 bg-gradient-to-br from-cyan-50/50 via-gray-50 to-primary-50/50 dark:from-gray-800 dark:via-gray-900 dark:to-cyan-900/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-600 bg-clip-text text-transparent mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring <span className="text-primary-600 dark:text-primary-400 font-semibold">ideas to life</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg p-8 rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-8 bg-gradient-to-b from-primary-500 to-cyan-600 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon;
                      return (
                        <div key={skillIndex} className="flex items-center group/skill">
                          {IconComponent ? (
                            <IconComponent className="text-2xl mr-4 dark:text-primary-400" />
                          ) : (
                            <span className="text-2xl mr-4" />
                          )}
                          <span className="text-gray-600 dark:text-gray-300 text-lg">{skill.name}</span>
                        </div>
                      );
                    })}
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

export default Skills;
