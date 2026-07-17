"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column: Huge typography */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-8">
              A Unique Intersection of <span className="text-accent">Precision</span> & <span className="text-accent">Scale.</span>
            </h2>
          </div>

          {/* Right Column: Editorial text */}
          <div className="space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              I exist at the rare intersection of healthcare and high-tech business architecture. As a BDS (Bachelor of Dental Surgery) Candidate, I have spent years mastering extreme precision, complex biological systems, and critical decision-making under pressure.
            </p>
            <p>
              Simultaneously, as an AI Systems Architect, I apply this same clinical rigor to business operations. I treat companies like organisms—diagnosing inefficiencies and engineering autonomous, agentic AI systems that eliminate manual bottlenecks.
            </p>
            <p className="text-white font-medium">
              The result? Businesses that operate themselves with surgical precision, scaling revenue while reducing downtime to near zero.
            </p>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-3xl text-white font-bold tracking-tighter">03+</div>
                <div className="text-sm uppercase tracking-widest text-accent mt-1">Ventures Scaled</div>
              </div>
              <div>
                <div className="text-3xl text-white font-bold tracking-tighter">100%</div>
                <div className="text-sm uppercase tracking-widest text-accent mt-1">Autonomous Systems</div>
              </div>
              <div>
                <div className="text-3xl text-white font-bold tracking-tighter">Top 1%</div>
                <div className="text-sm uppercase tracking-widest text-accent mt-1">AI Engineering</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
