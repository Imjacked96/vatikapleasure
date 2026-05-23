import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-primary/20 ${
        isScrolled ? "bg-secondary py-4" : "bg-secondary py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex flex-col items-start group">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-primary group-hover:text-accent transition-colors">
            Vatika Pleasure
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-widest font-bold text-text-dark hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+918959040333"
            className="px-6 py-3 bg-primary text-secondary text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300"
          >
            Order Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-secondary border-t border-primary/10 mt-4 h-screen"
        >
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg uppercase tracking-widest font-medium text-text-dark border-b border-primary/10 pb-4"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+918959040333"
              className="px-6 py-4 mt-4 text-center bg-primary text-secondary text-lg font-medium uppercase tracking-wider"
            >
              Call +91 89590 40333
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
