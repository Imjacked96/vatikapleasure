import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    review:
      "Good family environment and delicious vegetarian food. The paneer dishes are a must-try. Courteous staff and nice ambiance.",
    rating: 5,
  },
  {
    name: "Pooja Verma",
    review:
      "One of the best vegetarian restaurants in Jamnipali! The portion sizes are good and pricing is very affordable. Highly recommended for family dinners.",
    rating: 4,
  },
  {
    name: "Amit Patel",
    review:
      "Spacious seating and quick service. The North Indian main course was fantastic. It can get a bit rushed on weekends, but the food makes up for it.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 lg:py-32 bg-secondary text-primary relative"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Header Area */}
        <div className="lg:w-1/3 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="uppercase tracking-[0.25em] text-xs font-bold text-accent">
              Testimonials
            </span>
            <div className="flex-1 h-[1px] bg-primary/20"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl mb-6 leading-[1.1]"
          >
            Words from our <br />
            <span className="italic text-accent">Guests</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dark/70 font-light mb-10 text-lg leading-relaxed"
          >
            Hear what our customers have to say about their dining experience at
            Vatika Pleasure Restaurant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col space-y-2 border-l-2 border-accent pl-6 py-2"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={
                    i < 4
                      ? "text-accent fill-accent"
                      : "text-primary/10 fill-primary/10"
                  }
                />
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-serif font-bold text-2xl text-primary">
                3.8
                <span className="text-sm font-light text-primary/50">/5</span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                &bull; Google Reviews
              </span>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`bg-white p-10 rounded-3xl shadow-xl shadow-primary/5 border border-primary/5 relative xl:hover:-translate-y-2 transition-transform duration-300 ${
                index === 2
                  ? "md:col-span-2 lg:col-span-1 lg:-mt-16"
                  : index === 1
                    ? "md:mt-16"
                    : ""
              }`}
            >
              <Quote className="absolute top-8 right-8 text-primary/5 w-16 h-16 pointer-events-none" />
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < review.rating
                        ? "text-accent fill-accent"
                        : "text-primary/10 fill-primary/10"
                    }
                  />
                ))}
              </div>
              <p className="text-text-dark/80 font-light leading-relaxed mb-8 italic text-lg z-10 relative">
                "{review.review}"
              </p>
              <div className="mt-auto border-t border-primary/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-primary text-xl">
                    {review.name}
                  </h4>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                    Verified Guest
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
