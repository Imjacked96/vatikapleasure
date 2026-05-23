import { motion } from "motion/react";
import { useState } from "react";

const menuCategories = [
  {
    name: "Soups",
    items: [
      "Tomato Soup",
      "Veg Manchow Soup",
      "Hot & Sour Soup",
      "Sweet Corn Soup",
      "Mushroom Soup",
    ],
  },
  {
    name: "Starters",
    items: [
      "Paneer Chilli Dry",
      "Paneer Tikka",
      "Paneer Hariyali Tikka",
      "Baby Corn Chilli",
      "Veg Manchurian Dry",
      "Gobhi Chilli Dry",
    ],
  },
  {
    name: "Main Course",
    items: [
      "Paneer Khurchan",
      "Paneer Lajawab",
      "Paneer Butter Masala",
      "Mushroom Masala",
      "Malai Kofta",
      "Dal Makhani",
      "Dal Tadka",
    ],
  },
  {
    name: "Rice & Biryani",
    items: ["Veg Biryani", "Hyderabadi Biryani", "Veg Pulao", "Jeera Rice"],
  },
  {
    name: "Chinese",
    items: [
      "Veg Hakka Noodles",
      "Schezwan Fried Rice",
      "Veg Chowmein",
      "Shanghai Noodles",
    ],
  },
  {
    name: "Breads",
    items: ["Tandoori Roti", "Stuffed Naan", "Aloo Paratha", "Onion Kulcha"],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  return (
    <section id="menu" className="py-24 bg-white text-text-dark relative">
      <div className="absolute top-0 left-0 w-full h-px bg-primary/5"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <div className="w-12 h-[1px] bg-accent"></div>
            <span className="uppercase tracking-[0.25em] text-xs font-bold text-accent">
              Discover
            </span>
            <div className="w-12 h-[1px] bg-accent"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6"
          >
            Our <span className="italic text-accent">Menu</span>
          </motion.h2>
        </div>

        {/* Categories Nav */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm ${
                activeCategory === category.name
                  ? "bg-primary text-secondary scale-105"
                  : "bg-secondary text-primary/70 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {menuCategories
            .find((c) => c.name === activeCategory)
            ?.items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-between border-b border-primary/10 pb-5 group"
              >
                <div className="flex flex-col">
                  <span className="font-serif text-xl text-primary font-medium group-hover:text-accent transition-colors">
                    {item}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-px bg-primary/20 mr-4 group-hover:w-12 group-hover:bg-accent transition-all duration-300"></div>
                  <div
                    className="w-4 h-4 rounded-sm border border-green-600 flex items-center justify-center p-0.5"
                    title="Vegetarian"
                  >
                    <div className="w-full h-full bg-green-600 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-text-dark/60 italic font-serif mb-8">
            Explore our full menu at the restaurant or order online.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="flex items-center justify-center w-auto px-8 py-4 bg-secondary text-primary outline outline-1 outline-primary/20 hover:bg-primary hover:text-secondary hover:outline-primary rounded-full uppercase tracking-widest text-xs font-bold transition-all shadow-sm"
            >
              Download Menu PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
