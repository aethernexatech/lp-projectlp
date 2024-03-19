import { BrowserRouter } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Header />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
