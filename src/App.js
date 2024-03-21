import { BrowserRouter } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
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
        {/* <NavBar /> */}
        <Header />
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
