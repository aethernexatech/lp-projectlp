import { Button, Container, Col, Row, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Investasi() {
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
              <AnimationTitles title="Galery Belisapi." />
            </Col>
            <Col md={2} />
            <Col md={6}>
              <p>
                Investasi sapi qurban adalah sumbangan hewan, biasanya sapi,
                pada Idul Adha. Selain nilai ibadah, ini juga investasi sosial
                untuk manfaat masyarakat. <a herf="#">Pelajari Lebih Lanjut</a>
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

export default Investasi;
