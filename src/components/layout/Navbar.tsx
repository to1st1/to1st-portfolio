"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold tracking-tighter text-white hover:text-accent transition-colors">
            A.S
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="https://wa.me/966547242540" target="_blank" rel="noopener noreferrer">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium text-white transition-all"
          >
            Book Consultation
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
