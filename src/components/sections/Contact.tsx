"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden"
        >
          {/* Animated background glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-accent rounded-full blur-[120px] pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1] uppercase mb-8">
              Ready to scale <br />
              <span className="text-accent italic font-light lowercase">your operations?</span>
            </h2>
            
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
              Stop managing repetitive tasks. Let&apos;s build an intelligent business system that drives revenue while you sleep.
            </p>

            <a 
              href="https://wa.me/966547242540" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-full inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold text-lg transition-transform active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-3 group-hover:-translate-y-16 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                <MessageCircle size={24} /> Book Free AI Consultation
              </span>
              <span className="absolute inset-0 flex items-center justify-center gap-3 z-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                Chat on WhatsApp <ArrowRight size={24} />
              </span>
            </a>

            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <a href="mailto:to1st@icloud.com" className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-zinc-300">
                <Mail size={18} /> to1st@icloud.com
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-zinc-300">
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-zinc-300">
                <FaGithub size={18} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
