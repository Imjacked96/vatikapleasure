import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop"
          alt="Restaurant Ambiance"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-secondary/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 inline-flex items-center space-x-3 border border-white/20 bg-black/30 backdrop-blur-md px-6 py-2 rounded-full"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(200,169,81,0.8)]"></span>
          <span className="text-white text-xs uppercase tracking-[0.25em] font-medium">
            100% Pure Vegetarian
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1] max-w-4xl"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          A Pure <span className="text-accent italic">Vegetarian</span> Dining
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Delicious North Indian, Chinese & Biryani served with family-friendly
          ambiance and quality taste in Korba.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 bg-accent text-primary text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-xl"
          >
            View Menu
          </a>
          <a
            href="tel:+918959040333"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 backdrop-blur-sm transition-colors duration-300"
          >
            Reserve Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
