import { Button, Card, Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import AnimationTitlesH2 from "../components/functions/AnimationTitlesH2";
import sapi from "../images/headers/sapi-header.jpg";
import { useEffect, useState } from "react";

function Loading() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="loading position-relative">
      <Image src={sapi} className="imageHeader" />
      <Container
        id="container-header"
        className="align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden pb-3"
      >
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={require("../images/logo/logo.png")}
            className="img-logo"
          />
          <AnimationTitles title="Qurban Pilihan Kita, Berkah untuk Kita Semua" />
          <br />
          <p>
            “Daging-daging unta dan darahnya itu sekali-kali tidak dapat
            mencapai (keridhaan) Allah, tetapi ketakwaan dari kalianlah yang
            dapat mencapainya. Demikianlah Allah telah menundukkannya untuk
            kalian supaya kalian mengagungkan Allah terhadap hidayah-Nya kepada
            kalian. Dan berilah kabar gembira kepada orang-orang yang berbuat
            baik." (QS; Al - Hajj : 37)
          </p>
          <br />
          <Button>Qurban Sekarang!</Button>
        </motion.div>
      </Container>
      {/* <Button
        // className={`back-to-top-button ${isVisible ? "visible" : ""}`}
        style={{
          position: "fixed",
          bottom: "3%",
          right: "3%",
          zIndex: "1",
          backgroundColor: "transparent",
          border: "0px",
        }}
        onClick={scrollToTop}
        title="Go to top"
      >
        <Image
          src={require("../images/illustration/top.png")}
          width={50}
          height={50}
        />
      </Button> */}
      <Button
        // className={`back-to-top-button ${isVisible ? "visible" : ""}`}
        style={{
          position: "fixed",
          bottom: "5%",
          right: "3%",
          zIndex: "1",
          backgroundColor: "transparent",
          border: "0px",
        }}
        onClick={scrollToTop}
        title="Go to top"
      >
        <Image
          src={require("../images/illustration/wa.png")}
          width={70}
          height={70}
        />
      </Button>
    </div>
  );
}

export default Loading;
