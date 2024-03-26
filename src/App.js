import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Service from "./pages/Service";
import Portofolio from "./pages/Portofolio";
import Bonus from "./pages/Bonus";
import Package from "./pages/Package";
import Ask from "./pages/Ask";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <About />
        <Service />
        <Portofolio />
        <Bonus />
        <Package />
        <Ask />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
