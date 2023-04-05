import React from "react";
import "./App.css";
import Header from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Artists from "./components/Artists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Artists />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
