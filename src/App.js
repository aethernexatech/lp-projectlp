import { BrowserRouter } from "react-router-dom";
import Investasi from "./pages/Investasi";
import NavBar from "./components/navbar/Navbar";
import Paket from "./pages/Paket";
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
      <BrowserRouter basename="">
        {/* <NavBar /> */}
        <Header />
        <Tentang />
        <Keunggulan />
        <Investasi />
        <Produk />
        <Paket />
        {/* <Cicilan /> */}
        <Hubungi />
        <Faq />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
