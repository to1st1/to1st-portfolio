"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Lead AI Automation Engineer",
    company: "Oufa Car Rental",
    date: "Jan 2024 — Present",
    desc: "Architected a serverless, AI-powered business operating system unifying the entire rental lifecycle—from acquisition to operations.",
    metrics: [
      { label: "Manual Workload Reduced", value: "60%+" },
      { label: "Vehicle Downtime Eliminated", value: "0%" },
    ]
  },
  {
    id: 2,
    role: "AI & Business Systems Architect",
    company: "Freelance",
    date: "2023 — Present",
    desc: "Deploying high-leverage AI systems for modern businesses to remove bottlenecks and scale operations.",
    metrics: []
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="impact" className="relative py-32 px-4 md:px-12 lg:px-24" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 inline-block">The Journey</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">Experience Timeline</h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
             <motion.div 
               style={{ height: lineHeight }}
               className="absolute top-0 left-0 w-full bg-accent shadow-[0_0_15px_rgba(255,115,0,0.8)]"
             />
          </div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Dot */}
                <div className="absolute left-[-9px] md:left-1/2 w-5 h-5 rounded-full bg-background border-2 border-accent md:-translate-x-1/2 mt-1 z-10 shadow-[0_0_10px_rgba(255,115,0,0.8)]" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16"}`}>
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel p-8 md:p-10 rounded-3xl hover:border-accent/50 transition-colors duration-500"
                  >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-6">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-medium mb-1">{exp.role}</h3>
                    <h4 className="text-accent text-lg mb-4">{exp.company}</h4>
                    <p className="text-zinc-400 leading-relaxed font-light mb-6">
                      {exp.desc}
                    </p>
                    
                    {exp.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                        {exp.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="text-3xl font-medium text-white mb-1">{metric.value}</div>
                            <div className="text-xs text-zinc-500 uppercase tracking-wider">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
