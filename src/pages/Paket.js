import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";
import { Col, Container, Image, Row } from "react-bootstrap";

function Paket() {
  return (
    <div className="developers">
      <Container>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Row className="d-flex align-item-start">
            <Col md={4} className="align-item-start px-5">
              <AnimationTitles title="Paket Promo dan Bonus." />
              <p>
                Raih kesempatan istimewa dengan promo dan bonus menarik saat
                Anda membeli sapi dari kami. Jangan lewatkan kesempatan ini
                untuk mendapatkan lebih dari yang Anda bayangkan.
              </p>
            </Col>
            <Col md={1} />
            <Col md={7} className="text-left">
              <Image
                src={require("../images/promo/p-1.png")}
                className="img-promo"
              />
              <Image
                src={require("../images/promo/p-2.png")}
                className="img-promo"
              />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default Paket;
