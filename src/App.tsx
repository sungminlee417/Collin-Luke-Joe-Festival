import React from "react";
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
import ConcertCalendar from "./components/ConcertCalendar";

function App() {
  return (
    <>
      <div className="App flex flex-col">
        <div className="grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navigation />
                  <LandingPage />
                  <ConcertCalendar />
                  <Artists />
                  <Newsletter />
                  <Contact />
                </>
              }
            />
            <Route
              path="/artists/:artistId"
              element={
                <>
                  <ArtistNav />
                  <IndividualArtist />
                </>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
