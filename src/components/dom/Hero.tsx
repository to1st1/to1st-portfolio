"use client";

import Image from "next/image";
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
              System Architect
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-balance"
          >
            Systems that <span className="text-accent italic font-light">scale.</span>
            <br />
            Operations that <span className="text-accent italic font-light">run.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            className="text-lg md:text-xl text-zinc-400 max-w-xl font-light leading-relaxed mt-4"
          >
            I am Abdulrahman Shehata. I design and deploy elite AI-powered business systems that automate operations, optimize revenue, and remove manual workload entirely.
          </motion.p>
          
          <motion.div
             custom={3}
             initial="hidden"
             animate="visible"
             variants={titleVariants}
             className="pt-8"
          >
            <a href="#impact" className="relative group overflow-hidden rounded-full inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium transition-transform active:scale-95">
              <span className="relative z-10 group-hover:-translate-y-12 transition-transform duration-500 ease-[0.16,1,0.3,1]">Explore Architectures</span>
              <span className="absolute inset-0 flex items-center justify-center z-10 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                Scroll Down ↓
              </span>
            </a>
          </motion.div>
        </div>

        {/* Profile / Abstract Visualization area */}
        <motion.div 
          custom={4}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto"
        >
           {/* Animated glowing background */}
           <motion.div 
              animate={{ 
                scale: [1, 1.15, 1], 
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 45, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-accent blur-[80px]" 
           />
           
           {/* Floating Image Container */}
           <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full border border-accent/30 flex items-center justify-center overflow-hidden glass-panel shadow-[0_0_50px_rgba(255,115,0,0.15)]"
           >
              <Image 
                src="/profile.jpg"
                alt="Abdulrahman Shehata - Profile"
                fill
                priority
                className="object-cover scale-105"
              />
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
