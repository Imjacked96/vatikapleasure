import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Menu from "./components/sections/Menu";
import Features from "./components/sections/Features";
import Reviews from "./components/sections/Reviews";
import Location from "./components/sections/Location";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary text-text-dark font-sans relative overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Menu />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
