import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Performances from "./components/Performances/Performances";

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Performances />
    </div>
  );
}

export default App;
