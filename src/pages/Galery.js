import { Button, Container, Col, Row, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Galery() {
  return (
    <div className="about">
      <Container>
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Row className="d-flex justify-content-between">
            <Col md={4}>
              <AnimationTitles size="28px" weight="700">
                <span style={{ color: '#6b8b65' }}>Galeri Kegiatan</span>
          </AnimationTitles>
            </Col>
            <Col md={2} />
            <Col md={6}>
              <p>
                Ternakita memastikan seluruh hewan ternak untuk berqurban telah bersertifikasi.
                {/* <a herf="#"> Lihatt Lebih Lanjut</a> */}
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between">
            <Col md={4} className="p-3">
              <Image
                src={require("../images/invest/i-1.png")}
                className="w-100"
              />
            </Col>
            <Col md={4} className="p-3">
              <Image
                src={require("../images/invest/i-2.png")}
                className="w-100"
              />
            </Col>
            <Col md={4} className="p-3">
              <Image
                src={require("../images/invest/i-3.png")}
                className="w-100"
              />
            </Col>
            <Col md={4} className="p-3">
              <Image
                src={require("../images/invest/i-1.png")}
                className="w-100"
              />
            </Col>
            <Col md={4} className="p-3">
              <Image
                src={require("../images/invest/i-2.png")}
                className="w-100"
              />
            </Col>
            <Col md={4} className="p-3">
              <Image
                src={require("../images/invest/i-3.png")}
                className="w-100"
              />
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default Galery;
