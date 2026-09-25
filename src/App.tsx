import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-(--color-bg) text-fg overflow-x-hidden">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <About />
        <Service />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
