"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // Custom Awwwards ease
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 pt-20">
      <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left space-y-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="inline-block"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest uppercase text-accent mb-6 inline-block">
              AI Automation Engineer & DDS Candidate
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tighter text-balance uppercase"
          >
            Systems <span className="text-accent">that scale.</span>
            <br />
            Operations <span className="text-accent">that run.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-lg md:text-xl text-zinc-400 max-w-xl font-light leading-relaxed mt-4"
          >
            I don&apos;t build AI tools. I build intelligent business systems that generate revenue, eliminate manual work, and scale companies automatically.
          </motion.p>
          
          <motion.div
             custom={3}
             initial="hidden"
             animate="visible"
             variants={titleVariants}
             className="pt-8 flex flex-wrap items-center gap-6"
          >
            <a href="https://wa.me/966547242540" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden rounded-full inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-transform active:scale-95">
              <span className="relative z-10 flex items-center gap-2 group-hover:-translate-y-12 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                Book Free AI Consultation <ArrowRight size={18} />
              </span>
              <span className="absolute inset-0 flex items-center justify-center gap-2 z-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                Let&apos;s Build <ArrowRight size={18} />
              </span>
            </a>
            
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="#" className="hover:text-white transition-colors p-2"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-white transition-colors p-2"><FaLinkedin size={24} /></a>
              <a href="mailto:to1st@icloud.com" className="hover:text-white transition-colors p-2"><Mail size={24} /></a>
            </div>
          </motion.div>
        </div>

        {/* Abstract Floating Cards Area */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto flex items-center justify-center"
        >
           {/* Animated glowing background */}
           <motion.div 
              animate={{ 
                scale: [1, 1.15, 1], 
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 45, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-accent blur-[100px]" 
           />
           
           {/* Floating Cards */}
           <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-4/5 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-4 mr-8 bg-black/40"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl border border-accent/30">
                  ⚙️
                </div>
                <div>
                  <div className="text-white font-medium text-lg">AI Systems Architect</div>
                  <div className="text-accent text-sm">Building Agentic AI</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-4/5 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-4 ml-8 bg-black/40"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl border border-accent/30">
                  📈
                </div>
                <div>
                  <div className="text-white font-medium text-lg">60% Manual Work</div>
                  <div className="text-accent text-sm">Eliminated</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="w-3/4 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-4 mr-12 bg-black/40"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl border border-accent/30">
                  ⏳
                </div>
                <div>
                  <div className="text-white font-medium text-lg">30% Downtime</div>
                  <div className="text-accent text-sm">Reduced</div>
                </div>
              </motion.div>

           </div>
        </motion.div>
      </div>
    </section>
  );
}
