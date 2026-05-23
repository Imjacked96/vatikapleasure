export default function Footer() {
  return (
    <footer className="bg-primary text-secondary pt-24 pb-12 border-t-[8px] border-accent relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-bl-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20 border-b border-secondary/10 pb-20">
          {/* Brand Col */}
          <div className="lg:col-span-2 pr-8">
            <a href="#home" className="flex flex-col items-start mb-8 group">
              <span className="font-serif text-4xl font-bold text-secondary tracking-tight group-hover:text-accent transition-colors">
                Vatika Pleasure
              </span>
            </a>
            <p className="text-secondary/80 font-light text-sm leading-relaxed mb-8 max-w-sm">
              Discover a premium yet affordable vegetarian dining experience.
              From authentic North Indian to craving-worthy Chinese and Biryani,
              Vatika Pleasure is the flavor of Korba.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="block text-xs uppercase tracking-widest font-bold text-accent mb-8">
              Directory
            </span>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Menu",
                "Gallery",
                "Reviews",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm font-light text-secondary/70 hover:text-white transition-all flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300"></span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <span className="block text-xs uppercase tracking-widest font-bold text-accent mb-8">
              Inquiries
            </span>
            <ul className="space-y-6 text-sm text-secondary/70 font-light">
              <li>
                <strong className="block text-secondary text-xs uppercase tracking-widest mb-1.5 opacity-60">
                  Phone
                </strong>
                <a
                  href="tel:+918959040333"
                  className="hover:text-accent text-lg font-medium"
                >
                  +91 89590 40333
                </a>
              </li>
              <li>
                <strong className="block text-secondary text-xs uppercase tracking-widest mb-1.5 opacity-60">
                  Email
                </strong>
                <a
                  href="mailto:info@vatikapleasure.com"
                  className="hover:text-accent"
                >
                  info@vatikapleasure.com
                </a>
              </li>
              <li>
                <strong className="block text-secondary text-xs uppercase tracking-widest mb-1.5 opacity-60">
                  Address
                </strong>
                Sada Colony, Jamnipali, <br />
                Korba, CG 495450
              </li>
            </ul>
          </div>

          {/* Order Online Links */}
          <div>
            <span className="block text-xs uppercase tracking-widest font-bold text-accent mb-8">
              Service
            </span>
            <div className="flex flex-col space-y-4">
              <a
                href="https://www.zomato.com/korba/vatika-pleasure-korba-locality/order"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-6 py-4 rounded-full bg-red-600 outline outline-1 outline-transparent text-white text-xs font-bold tracking-widest hover:bg-white hover:text-red-600 transition-colors shadow-lg"
              >
                Order on Zomato
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-6 py-4 rounded-full bg-transparent border border-secondary/30 text-secondary text-xs font-bold tracking-widest hover:bg-secondary hover:text-primary transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-secondary/40 font-light tracking-wide">
          <p>
            &copy; {new Date().getFullYear()} Vatika Pleasure Restaurant. All
            rights reserved.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
