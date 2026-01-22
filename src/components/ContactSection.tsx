import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

export const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "harshitdadheech@email.com",
      href: "mailto:harshitdadheech@email.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harshitdadheech",
      href: "https://linkedin.com/in/harshitdadheech",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/harshitdadheech",
      href: "https://github.com/harshitdadheech",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="section-heading mb-4">Let's Connect</h2>
            <p className="section-subheading mx-auto">
              I'm always open to discussing new opportunities and projects
            </p>
          </div>

          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to say hello, feel free to reach out. I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <link.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">{link.label}</div>
                            <div className="text-sm font-medium text-foreground">{link.value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <link.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">{link.label}</div>
                            <div className="text-sm font-medium text-foreground">{link.value}</div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                  Ready to collaborate?
                </h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Let's build something amazing together
                </p>
                <Button size="lg" className="rounded-full px-8" asChild>
                  <a href="mailto:harshitdadheech@email.com">
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
