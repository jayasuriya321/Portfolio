import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/Scrolltop";
import PageLoader from "./components/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen">
      {loading && <PageLoader onFinish={() => setLoading(false)} />}

      <ScrollToTop />

      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <main>
          <div>
            <div className="overflow-hidden">
              <div>
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
      </div>
    </div>
  );
}
