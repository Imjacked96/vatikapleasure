import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-secondary text-text-dark relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full -translate-y-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Images Grid */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative grid grid-cols-2 gap-6"
        >
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl translate-y-8">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl -translate-y-8">
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1936&auto=format&fit=crop"
              alt="Indian Cuisine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Central Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-center p-2 shadow-2xl z-20 border border-primary/10">
            <div className="w-full h-full border border-accent border-dashed rounded-full flex items-center justify-center text-primary font-serif font-bold text-center leading-tight bg-secondary/30 backdrop-blur-sm">
              <span className="italic text-lg">
                Taste of
                <br />
                Home
              </span>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-accent">
              Our Story
            </span>
            <div className="flex-1 h-[1px] bg-primary/10"></div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight">
            Where Family <br />
            <span className="italic text-accent">Meets Flavor.</span>
          </h2>

          <div className="space-y-6 text-text-dark/70 font-light leading-relaxed text-lg">
            <p>
              Vatika Pleasure Restaurant is a family-friendly vegetarian
              restaurant located in Jamnipali, Korba. Known for its flavorful
              North Indian cuisine, Chinese dishes, biryani, and comfortable
              dining ambiance.
            </p>
            <p>
              With spacious seating, an AC dining area, and quality food
              preparation, Vatika Pleasure has become a popular destination for
              families, friends, and celebrations in Korba. We pride ourselves
              on hygienic preparation, courteous staff, and an unforgettable
              culinary experience.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-primary/10">
            <div>
              <div className="font-serif text-4xl text-primary mb-2">
                380<span className="text-accent">+</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-text-dark/50 font-bold">
                Happy Reviews
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl text-primary mb-2">
                100<span className="text-accent">%</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-text-dark/50 font-bold">
                Vegetarian
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl text-primary mb-2">
                3.8
                <span className="text-accent text-2xl relative -top-2">/5</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-text-dark/50 font-bold">
                Google Rating
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
