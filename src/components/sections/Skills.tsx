"use client";

import { motion } from "framer-motion";

const skills = [
  "Agentic AI", "LLMs", "GPT-4", "Claude 3", "n8n", "Python", 
  "Automation", "Docker", "PostgreSQL", "Convex", "Replit", 
  "Prompt Engineering", "APIs", "Business Systems", "Marketing", 
  "Funnels", "Lead Scoring", "Revenue Optimization"
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] uppercase">
            Cognitive <br />
            <span className="text-accent">Arsenal.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05, 
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                borderColor: "rgba(255,115,0,0.8)",
                backgroundColor: "rgba(255,115,0,0.1)",
                color: "#fff"
              }}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-zinc-300 font-medium text-sm md:text-base cursor-default transition-colors duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
