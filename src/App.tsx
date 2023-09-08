import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Artists from "./components/Artists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConcertDates from "./components/ConcertDates";
import NotFound from "./components/NotFound";
import PastSeasons from "./components/PastSeasons";
import Staff from "./components/Staff";

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
                <Hero />
                <About />
                <Staff />
                {/* <Artists /> */}
                {/* <ConcertDates /> */}
                <Contact />
              </>
            }
          />
          <Route path="/past-seasons" element={<PastSeasons />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
