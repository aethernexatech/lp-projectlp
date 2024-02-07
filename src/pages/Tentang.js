// Import bootstrap react components
import { Col, Container, Image, Row } from "react-bootstrap";
import "swiper/css";
// Import Framer-motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Tentang() {
  return (
    // Start partners
    <motion.div
      style={{ marginTop: "0px" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="partners"
    >
      <Col className="d-flex align-items-center flex-nowrap overflow-hidden py-5">
        <Container>
          <Row>
            <Col xl={6} className="align-center mt-5">
              <AnimationTitles title="Tentang Belisapi." />
              <p>
                SEBISAKU adalah platform terdepan yang didedikasikan untuk
                memudahkan dan memberdayakan individu dalam menabung untuk
                Kurban dengan fokus utama pada kebutuhan dan keinginan konsumen
              </p>
              <h6>
                SEBISAKU didedikasikan untuk memberikan pengalaman menabung
                Kurban yang mudah dan tidak memberatkan pengguna. Kami memahami
                kebutuhan dan preferensi individu, dan kami berkomitmen untuk
                memberdayakan setiap pengguna kami dalam menunaikan ibadah
                Kurban dengan cara yang paling nyaman dan bermakna
              </h6>
              <Row>
                <Col xs={4} className="d-flex justify-content-center">
                  <Col md={3}>
                    <Image
                      src="https://sebisaku.id/images/icons/medal.svg"
                      style={{ widows: "30px", height: "30px" }}
                    />
                  </Col>
                  <Col md={9}>
                    <h3>5K</h3> <h6>Sapi Terjual</h6>
                  </Col>
                </Col>
                <Col xs={4} className="d-flex justify-content-center">
                  <Col md={3}>
                    <Image
                      src="https://sebisaku.id/images/icons/medal.svg"
                      style={{ widows: "30px", height: "30px" }}
                    />
                  </Col>
                  <Col md={9}>
                    <h3>3987</h3> <h6>Pengguna</h6>
                  </Col>
                </Col>
                <Col xs={4} className="d-flex justify-content-center">
                  <Col md={3}>
                    <Image
                      src="https://sebisaku.id/images/icons/medal.svg"
                      style={{ widows: "30px", height: "30px" }}
                    />
                  </Col>
                  <Col md={9}>
                    <h3>35</h3> <h6>Peternak</h6>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col xl={6}>
              <Image
                src={"https://sebisaku.id/images/common/bg-1.jpeg"}
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </motion.div>
    // End partners
  );
}

export default Tentang;
