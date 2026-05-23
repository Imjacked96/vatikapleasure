import { motion } from "motion/react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-white text-text-dark border-t border-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="uppercase tracking-[0.25em] text-xs font-bold text-accent">
              Location
            </span>
            <div className="w-12 h-[1px] bg-accent"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-4"
          >
            Visit <span className="italic text-accent">Us</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-12 bg-secondary p-10 lg:p-14 rounded-3xl shadow-lg border border-primary/5"
          >
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] font-bold opacity-60 mb-2 text-primary">
                  Address
                </span>
                <p className="text-text-dark/80 font-light leading-relaxed text-lg pb-6 border-b border-primary/10">
                  Plot No. 13-14, Wada Colony, near Bansal Traders,
                  <br />
                  Sardar Vallabh Bhai Patel Nagar, Jamnipali,
                  <br />
                  Korba, Chhattisgarh 495450, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                <Clock size={24} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-[0.2em] font-bold opacity-60 mb-2 text-primary">
                  Hours
                </span>
                <p className="text-text-dark/80 font-light text-lg border-b border-primary/10 pb-6">
                  Open Daily:{" "}
                  <span className="font-bold text-primary">
                    11:00 AM – 10:30 PM
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-accent">
                <Phone size={24} />
              </div>
              <div className="flex-1">
                <span className="block text-xs uppercase tracking-[0.2em] font-bold opacity-60 mb-2 text-primary">
                  Contact
                </span>
                <a
                  href="tel:+918959040333"
                  className="text-text-dark/90 font-serif text-2xl hover:text-accent transition-colors block pb-8 border-b border-primary/10"
                >
                  +91 89590 40333
                </a>
              </div>
            </div>

            <div className="pt-2 text-center sm:text-left">
              <a
                href="https://maps.google.com/?q=Vatika+Pleasure+Restaurant+Korba"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center sm:justify-start space-x-3 px-8 py-4 bg-primary text-secondary rounded-full uppercase tracking-widest text-xs font-bold hover:bg-accent transition-colors shadow-md w-full sm:w-auto"
              >
                <Navigation size={18} />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Map Placeholder Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] bg-secondary rounded-3xl border border-primary/10 relative flex items-center justify-center overflow-hidden shadow-inner group"
          >
            <div
              className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-1000 group-hover:scale-110"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #304D30 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="text-center z-10 p-10 bg-white shadow-2xl max-w-sm w-full mx-6 rounded-2xl relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <MapPin className="text-accent w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-primary font-bold mb-3 mt-4">
                Vatika Pleasure
              </h4>
              <p className="text-sm font-light text-text-dark/60 mb-8 border-b border-primary/10 pb-6">
                Interactive Map View
              </p>
              <a
                href="https://maps.google.com/?q=Vatika+Pleasure+Restaurant+Korba"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-widest font-bold text-accent hover:text-primary transition-colors flex items-center justify-center space-x-2"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
