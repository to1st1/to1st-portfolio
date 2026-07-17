"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Business Automation Engine",
    overview: "A complete autonomous OS that handles operations, scaling, and internal workflows without human intervention.",
    tech: ["Python", "n8n", "OpenAI", "PostgreSQL"],
    impact: "Eliminated 60% of manual work.",
  },
  {
    title: "Enterprise RAG Systems",
    overview: "Retrieval-Augmented Generation infrastructure allowing companies to query their entire proprietary database instantly.",
    tech: ["LLM", "Pinecone", "LangChain", "Next.js"],
    impact: "Reduced data retrieval time by 90%.",
  },
  {
    title: "Autonomous CRM Automation",
    overview: "Self-managing CRM pipelines that automatically score leads, draft personalized emails, and book meetings.",
    tech: ["HubSpot API", "GPT-4", "Make.com"],
    impact: "Increased lead conversion by 35%.",
  },
  {
    title: "AI Customer Support Agents",
    overview: "Intelligent support agents capable of resolving complex customer queries with brand-aligned tone and perfect accuracy.",
    tech: ["Claude 3", "Vector DB", "Zendesk API"],
    impact: "Resolved 70% of tickets automatically.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] uppercase">
            Featured <br />
            <span className="text-accent">Architectures.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-panel p-8 md:p-10 rounded-3xl border border-white/10 hover:border-accent/50 transition-colors duration-500 overflow-hidden bg-white/[0.02]"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300 shrink-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <p className="text-zinc-400 font-light leading-relaxed mb-8 flex-grow">
                  {project.overview}
                </p>

                <div className="space-y-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-zinc-300 bg-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Business Impact</div>
                    <div className="text-accent font-medium">{project.impact}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
