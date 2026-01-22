import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Sundaram Technologies",
    role: "Android Developer",
    period: "Jan 2025 – Present",
    description: [
      "Developing Android scanning applications for manufacturing and pharmaceutical plants",
      "Implementing barcode and QR code scanning with offline data synchronization",
      "Building IoT-based mobile applications with real-time data monitoring using Firebase Realtime Database",
      "Working with REST APIs and Firebase services for live data updates and device communication",
    ],
    current: true,
  },
  {
    company: "Hoicko Technologies Pvt. Ltd.",
    role: "Flutter Developer",
    period: "May 2024 – Jan 2025",
    description: [
      "Developed and maintained Flutter-based desktop and mobile applications",
      "Supported manufacturing operations and internal workflows",
      "Implemented geofencing, dashboards, and role-based access control",
    ],
    current: false,
  },
  {
    company: "Sundaram Technologies",
    role: "Android Developer",
    period: "Feb 2023 – May 2024",
    description: [
      "Developed Android scanning applications for manufacturing environments",
      "Integrated barcode/QR scanning with offline data handling",
      "Worked on IoT-integrated mobile applications with real-time database synchronization",
    ],
    current: false,
  },
  {
    company: "IndoWorld Consulting",
    role: "Android Developer Trainee",
    period: "Jun 2022 – Jan 2023",
    description: [
      "Integrated REST APIs and Firebase services",
      "Gained foundational experience in Android development",
      "Learned best practices for mobile application architecture",
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Professional Experience</h2>
          <p className="section-subheading mx-auto">
            My journey in mobile application development
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 md:ml-1/2  ${
                  index % 2 === 0 ? "md:pr-8 md:text-right md:w-[50%]" : "md:pl-8 md:pr-8 md:ml-1/2 "
                }`}
                // CHANGE THE SECOND 50% TO
                // style={{ marginLeft: index % 2 === 1 ? "50%" : 0, width: index % 2 === 1 ? "50%" : "50%" }}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 w-4 h-4 rounded-full border-4 border-background -left-2 ${
                  exp.current ? "bg-primary" : "bg-muted-foreground"
                } ${index % 2 === 0 ? "left-0 md:left-auto md:-right-2" : "left-0 md:-left-2 md:ml-[50%]"}`} />

                <div className={`glass-card p-6 hover:border-primary/30 transition-colors ${
                  index % 2 === 0 ? "md:mr-6 " : "md:ml-[58%]"
                }`}>
                  {exp.current && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      Current
                    </span>
                  )}
                  
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {exp.role}
                  </h3>
                  
                  <div className={`flex items-center gap-2 text-primary mb-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : "text-left"}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
	
