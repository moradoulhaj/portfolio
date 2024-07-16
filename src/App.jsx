import Header from "./components/Header";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => { 
    Aos.init();
  },[])
  return (
    <div className="container">
      <Header />
      <Footer />
    </div>
  );
}
