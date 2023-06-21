import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Artists from "./components/Artists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConcertDates from "./components/ConcertDates";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Trailer from "./components/Trailer";

const App = () => {
  return (
    <div className="flex flex-col h-screen" id="App">
      <Navigation />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Trailer />
                <Artists />
                <ConcertDates />
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
