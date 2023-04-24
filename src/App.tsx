import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Artists from "./components/Artists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Newsletter from "./components/Newsletter";
import ConcertDates from "./components/ConcertDates";

function App() {
  return (
    <>
      <div className="flex flex-col" id="App">
        <Navigation />
        <LandingPage />
        <Artists />
        <ConcertDates />
        {/* <Newsletter /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
