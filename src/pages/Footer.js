import { Button, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import AnimationTitles from "../components/functions/AnimationTitles";
function Footer() {
  const getWhatsApp = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_URL}${"wa-rotator"}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );

      return window.open(
        `https://wa.me/${response.data.data.phone}`,
        "_blank",
        "rel=noopener noreferrer"
      );
    } catch (error) {
      console.error("Error fetching WhatsApp number:", error);
    }
  };

  return (
    <footer className="text-center">
      <AnimationTitles
        className="title mx-auto text-center"
        size="28px"
        weight="700"
      >
        <motion.span style={{ color: "black", fontWeight: "Bold" }}>
          <h3 className="mb-5">Kontak Kami.</h3>
          <h6>Surabaya.</h6>
        </motion.span>
      </AnimationTitles>
      <Row className="d-flex justify-content-center">
        <Image
          src={require("../images/footer/ig-icon.png")}
          style={{ width: "3.5%" }}
        />

        <Image
          src={require("../images/footer/phone-icon.png")}
          style={{ width: "3.5%" }}
        />

        <Image
          src={require("../images/footer/wa-icon.png")}
          style={{ width: "3.5%" }}
        />
      </Row>
      <motion.div
        initial={{ opacity: -200 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-black d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3 line-top"
      >
        <p className="text-black">
          © 2024 PT Ekis Muda Berkarya. All rights reserved
        </p>
        <p>
          Bantuan
          {" | "}
          Syarat Ketentuan {" | "} Design by{" "}
          <Link className="text-black link-underline-opacity-0" to={""}>
            AetherNexaTechnology
          </Link>
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
