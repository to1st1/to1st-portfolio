"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Briefcase, Zap } from "lucide-react";

const principles = [
  {
    icon: <Briefcase size={32} />,
    title: "Business First",
    description: "I don't build tech for the sake of tech. Every system I design is engineered to solve a specific bottleneck and directly impact your bottom line."
  },
  {
    icon: <Zap size={32} />,
    title: "ROI Focused",
    description: "My architectures pay for themselves. By eliminating manual tasks and optimizing workflows, the ROI is usually realized within the first quarter."
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "Systems Thinking",
    description: "I view your company as an organism. I build interconnected, agentic ecosystems where marketing, sales, and operations talk to each other seamlessly."
  }
];

export default function WhyMe() {
  return (
    <section className="relative py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] uppercase">
            The <span className="text-accent">Advantage.</span>
          </h2>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Why industry leaders choose me to architect their internal engines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-10 rounded-3xl border border-white/10 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="w-20 h-20 rounded-full border border-white/20 bg-black/50 flex items-center justify-center text-accent mb-8 shadow-[0_0_30px_rgba(255,115,0,0.15)]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
