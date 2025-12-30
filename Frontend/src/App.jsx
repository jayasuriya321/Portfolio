import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import SmoothScroller from "./SmoothScroll/SmoothScroll";
import ScrollToTop from "./components/Scrolltop";

export default function App() {
  return (
    <div className="min-h-screen">
       <ScrollToTop />
      <Navbar />
      <SmoothScroller>
      <main className="">
        <div className="">
          <div className="overflow-hidden">
            {/* Content */}
            <div className="">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      </SmoothScroller>
    </div>
  );
}
