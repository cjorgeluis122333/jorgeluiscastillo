import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from './constants/content';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillBadge } from './components/SkillBadge';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const App: React.FC = () => {
  const { es: content } = CONTENT;

  if (!content) return <div className="text-white">Error: Content not found</div>;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="section-container min-h-[90vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-sm font-semibold tracking-wider text-accent-primary uppercase bg-accent-primary/10 rounded-full border border-accent-primary/20">
            {content.hero.role}
          </span>
          <h1 className="text-7xl md:text-9xl font-bold mb-8 text-white leading-tight tracking-tighter">
            Jorge Luis <span className="text-gradient">Castillo Vidal</span>
          </h1>
          <p className="text-2xl md:text-3xl text-accent-muted mb-12 leading-relaxed font-light max-w-2xl">
            {content.hero.description}
          </p>

          <div className="flex flex-wrap gap-5">
            {content.hero.contact.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="flex items-center gap-3 px-6 py-4 glass-card text-white font-semibold text-lg"
              >
                <item.icon className="w-6 h-6 text-accent-secondary" />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Professional Profile */}
      <section className="section-container border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-bold text-white mb-8 md:sticky md:top-24">
              {content.sections.profile}
            </h2>
          </div>
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl text-accent-muted leading-relaxed font-light"
            >
              {content.profile.text}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-container border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-bold text-white mb-8 md:sticky md:top-24 flex items-center gap-5">
              <Briefcase className="w-10 h-10 text-accent-primary" />
              {content.sections.experience}
            </h2>
          </div>
          <div className="md:col-span-8">
            {content.experience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-container border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-bold text-white mb-8 md:sticky md:top-24 flex items-center gap-5">
              <Code className="w-10 h-10 text-accent-primary" />
              {content.sections.techStack}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-20">
            {content.techStack.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-accent-secondary mb-10 pb-4 border-b border-accent-secondary/20">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-5">
                  {group.skills.map((skill, sIndex) => (
                    <SkillBadge key={sIndex} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-accent-secondary mb-10 pb-4 border-b border-accent-secondary/20">
                Herramientas
              </h3>
              <div className="flex flex-wrap gap-5">
                {content.tools.map((tool, index) => (
                  <SkillBadge key={index} {...tool} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-container border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-bold text-white mb-8 md:sticky md:top-24 flex items-center gap-5">
              <GraduationCap className="w-10 h-10 text-accent-primary" />
              {content.sections.education}
            </h2>
          </div>
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12"
            >
              <h3 className="text-3xl font-bold text-white mb-4">{content.education.degree}</h3>
              <p className="text-2xl text-accent-secondary font-medium">{content.education.institution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="section-container border-t border-white/5 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="text-5xl font-bold text-white mb-8 md:sticky md:top-24">
              {content.sections.softSkills}
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 15, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-6 glass-card border-none bg-white/5 text-accent-muted font-semibold text-xl"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 text-center bg-black/30">
        <p className="text-accent-muted text-lg font-medium">
          © {new Date().getFullYear()} Jorge Luis Castillo Vidal. Implementación Full-Stack & Mobile.
        </p>
        <p className="text-accent-muted/50 text-sm mt-4 tracking-widest uppercase">
          Diseño Premium • React 19 • Tailwind CSS v3
        </p>
      </footer>
    </div>
  );
};

export default App;
