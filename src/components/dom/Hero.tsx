"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

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
              Dental Student & Entrepreneur
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-balance"
          >
            Precision in <span className="text-accent italic font-light">Dentistry.</span>
            <br />
            Vision in <span className="text-accent italic font-light">Business.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-lg md:text-xl text-zinc-400 max-w-xl font-light leading-relaxed mt-4"
          >
            I am Abdelrahman Shehata. I combine clinical precision as a dental student with strategic vision as an entrepreneur, building ventures that make a real impact.
          </motion.p>
          
          <motion.div
             custom={3}
             initial="hidden"
             animate="visible"
             variants={titleVariants}
             className="pt-8"
          >
            <a href="#impact" className="relative group overflow-hidden rounded-full inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-transform active:scale-95">
              <span className="relative z-10 group-hover:-translate-y-12 transition-transform duration-500 ease-[0.16,1,0.3,1]">Explore My Journey</span>
              <span className="absolute inset-0 flex items-center justify-center z-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                Scroll Down ↓
              </span>
            </a>
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
                className="w-4/5 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-4 mr-8"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">
                  🦷
                </div>
                <div>
                  <div className="text-white font-medium text-lg">DDS Candidate</div>
                  <div className="text-zinc-400 text-sm">Medical University</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="w-4/5 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-4 ml-8"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">
                  💼
                </div>
                <div>
                  <div className="text-white font-medium text-lg">3+ Ventures</div>
                  <div className="text-zinc-400 text-sm">Founded & Scaled</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="w-3/4 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-4 mr-12"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xl">
                  ⚙️
                </div>
                <div>
                  <div className="text-white font-medium text-lg">Systems Innovator</div>
                  <div className="text-zinc-400 text-sm">Automating Operations</div>
                </div>
              </motion.div>

           </div>
        </motion.div>
      </div>
    </section>
  );
}
