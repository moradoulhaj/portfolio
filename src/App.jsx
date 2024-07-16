import Header from "./components/Header";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";

export default function App() {
  useEffect(() => { 
    Aos.init();
  },[])
  return (
    <div className="container">
      <Header />
    </div>
  );
}
