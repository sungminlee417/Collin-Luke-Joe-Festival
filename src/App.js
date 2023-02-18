import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Performances from "./components/Performances/Performances";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Performances />
      <Contact />
    </div>
  );
}

export default App;
