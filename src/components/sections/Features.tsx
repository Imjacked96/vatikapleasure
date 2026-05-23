import { motion } from "motion/react";
import {
  Utensils,
  Users,
  Wind,
  Truck,
  PartyPopper,
  Maximize,
  CircleDollarSign,
  CheckCircle2,
  HeartHandshake,
  Clock,
} from "lucide-react";

const features = [
  { icon: Utensils, label: "100% Vegetarian" },
  { icon: Users, label: "Family Dining" },
  { icon: Wind, label: "AC Seating Area" },
  { icon: Truck, label: "Online Delivery" },
  { icon: PartyPopper, label: "Birthday & Party" },
  { icon: Maximize, label: "Spacious Seating" },
  { icon: CircleDollarSign, label: "Affordable Pricing" },
  { icon: CheckCircle2, label: "Hygienic Kitchen" },
  { icon: HeartHandshake, label: "Friendly Staff" },
  { icon: Clock, label: "Quick Service" },
];

export default function Features() {
  return (
    <section className="py-24 bg-primary text-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 60L60 0H30L0 30M60 60V30L30 60"
                stroke="#C8A951"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <span className="block text-xs uppercase tracking-[0.25em] font-bold text-accent">
              Features
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary">
              Why Choose <span className="italic text-accent">Vatika</span>
            </h2>
            <div className="w-16 h-[1px] bg-accent/50 mt-4"></div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary/80 font-light max-w-2xl mx-auto mt-6 text-lg"
          >
            A premium yet affordable vegetarian family restaurant in Korba with
            modern ambiance and a quality food experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/5 border border-accent/20 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(200,169,81,0.1)] group-hover:shadow-[0_0_25px_rgba(200,169,81,0.4)] group-hover:scale-110">
                <feature.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="font-serif text-lg text-secondary tracking-wide group-hover:text-accent transition-colors">
                {feature.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
