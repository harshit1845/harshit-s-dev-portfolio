import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, Smartphone } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+" },
    { icon: Smartphone, label: "Apps Delivered", value: "15+" },
    { icon: Code2, label: "Technologies", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading text-center mb-4">About Me</h2>
          <p className="section-subheading text-center mx-auto mb-12">
            Passionate about creating impactful mobile experiences
          </p>

          <div className="glass-card p-8 md:p-12 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span>India</span>
            </div>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I'm a results-driven Mobile Application Developer with 3+ years of experience 
              in <span className="text-primary font-medium">Android (Java, Kotlin)</span> and{" "}
              <span className="text-primary font-medium">Flutter</span> development.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I specialize in building scalable mobile and desktop applications for 
              manufacturing and pharmaceutical industries. My expertise includes geofencing, 
              barcode/QR scanning, offline-first architecture, Firebase integration, REST APIs, 
              IoT-based real-time applications, and AI-integrated mobile solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about writing clean, maintainable code and creating seamless 
              user experiences that solve real-world problems. When I'm not coding, I enjoy 
              exploring new technologies and contributing to open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
