import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Building2, Shield, Heart, Brain } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "STEMP & HRMS",
    subtitle: "Employee Attendance System",
    description: "A comprehensive employee attendance and HR management system with geofencing capabilities for accurate location-based attendance tracking.",
    tech: ["Flutter", "Firebase", "Geofencing", "Dart"],
    icon: Building2,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Manufacturing Scanner",
    subtitle: "Barcode Scanning Application",
    description: "Industrial-grade barcode scanning application with offline data synchronization for manufacturing environments.",
    tech: ["Android Java", "Flutter", "SQLite", "REST API"],
    icon: Smartphone,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "IoT Monitor",
    subtitle: "Real-time Monitoring Application",
    description: "IoT-based application for real-time monitoring of industrial equipment with live data visualization and alerts.",
    tech: ["Flutter", "Firebase Realtime DB", "IoT", "Charts"],
    icon: ExternalLink,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "PrivacyGuard",
    subtitle: "App Lock Application",
    description: "Secure app lock application with biometric authentication to protect sensitive applications on your device.",
    tech: ["Flutter", "Biometrics", "Local Storage", "Security"],
    icon: Shield,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Matrimonial App",
    subtitle: "Mobile Application",
    description: "Full-featured matrimonial platform with profile matching, chat functionality, and advanced search filters.",
    tech: ["Flutter", "Firebase", "Authentication", "Cloud Functions"],
    icon: Heart,
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    title: "AI Resume Builder",
    subtitle: "AI-Powered Application",
    description: "Intelligent resume builder that uses AI to generate professional resumes with smart suggestions and formatting.",
    tech: ["Flutter", "AI/ML", "PDF Generation", "Templates"],
    icon: Brain,
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A selection of projects I've built throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card h-full p-6 hover:border-primary/30 transition-all duration-300 flex flex-col">
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-6 h-6 text-foreground" />
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
