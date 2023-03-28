import React from "react";
import "./App.css";
import Header from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Performances from "./components/Performances/Performances";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Performances />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
