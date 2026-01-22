import { motion } from "framer-motion";
import { Award, Trophy, Zap, CheckCircle } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Certified Android App Developer",
    description: "Professional certification in Android application development",
  },
  {
    icon: Trophy,
    title: "Hackathon Participation",
    description: "Certificate of participation in competitive hackathon events",
  },
  {
    icon: Zap,
    title: "Flutter & Firebase Expert",
    description: "Hands-on experience with Flutter, Firebase, IoT, and AI-based applications",
  },
  {
    icon: CheckCircle,
    title: "Enterprise-Grade Delivery",
    description: "Successfully delivered multiple enterprise-grade mobile applications",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Achievements & Certifications</h2>
          <p className="section-subheading mx-auto">
            Recognition and milestones in my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <achievement.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
