import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Artists from "./components/Artists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import IndividualArtist from "./components/IndividualArtist";
import ArtistNav from "./components/ArtistNav";
import ConcertDates from "./components/ConcertDates";

function App() {
  return (
    <>
      <div className="App flex flex-col">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <LandingPage />
                <Artists />
                <ConcertDates />
                <Newsletter />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/artists/:artistId"
            element={
              <div className="flex flex-col h-screen">
                <div className="grow">
                  <ArtistNav />
                  <IndividualArtist />
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
