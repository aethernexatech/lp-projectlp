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
            <Col md={4} className="mt-5 text-center text-lg-start">
            <AnimationTitles size="25px" weight="700">
                <span style={{ color: '#6b8b65' }}>Promo & Bonus</span>&nbsp;
              </AnimationTitles>
              <p className="mt-3 text-center text-lg-start">
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
