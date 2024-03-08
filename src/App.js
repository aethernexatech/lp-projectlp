import { BrowserRouter } from "react-router-dom";
import Galery from "./pages/Galery";
import NavBar from "./components/navbar/Navbar";
import Paket from "./pages/Paket";
import Agency from "./pages/Agency";
import Footer from "./pages/Footer";
import Keunggulan from "./pages/Keunggulan";
import Header from "./pages/Header";
import Faq from "./pages/Faq";
import Tentang from "./pages/Tentang";
import Produk from "./pages/Produk";
import Hubungi from "./pages/Hubungi";
import Cicilan from "./pages/Cicilan";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Header />
        <Keunggulan />
        <Produk />
        <Paket />
        <Agency />
        <Tentang />
        {/* <Galery /> */}
        {/* <Cicilan /> */}
        <Hubungi />
        <Faq />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
