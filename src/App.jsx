import Header from "./components/Header";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>

      <Footer />
    </div>
  );
}
