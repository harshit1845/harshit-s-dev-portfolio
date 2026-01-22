import { motion } from "framer-motion";

const skills = [
  {
    category: "Mobile Development",
    items: [
      { name: "Flutter", icon: "🦋" },
      { name: "Android (Kotlin)", icon: "🤖" },
      { name: "Android (Java)", icon: "☕" },
      { name: "Dart", icon: "🎯" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Firebase", icon: "🔥" },
      { name: "REST APIs", icon: "🔌" },
      { name: "SQLite / Room", icon: "🗃️" },
      { name: "Firestore", icon: "📊" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git & GitHub", icon: "📦" },
      { name: "Android Studio", icon: "💻" },
      { name: "VS Code", icon: "🔧" },
      { name: "IoT Integration", icon: "📡" },
    ],
  },
  {
    category: "Specialized Skills",
    items: [
      { name: "Barcode/QR Scanning", icon: "📷" },
      { name: "Geofencing", icon: "📍" },
      { name: "Offline Sync", icon: "🔄" },
      { name: "AI Integration", icon: "🤖" },
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Skills & Technologies</h2>
          <p className="section-subheading mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-6 text-foreground">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
