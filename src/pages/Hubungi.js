import { Button, Container, Col, Row, Image, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Hubungi() {
  return (
    <div className="hubungi">
      <Container className="">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Row>
            <Col xl={6}>
              <Col className="contact">
                <h3>Tanya tentang program kami</h3>
                <p>
                  Kirimkan pesan kepada kami dan tim kami akan segera
                  menghubungi Anda
                </p>
                <Form>
                  <Form.Control type="text" placeholder="Nama Lengkap" />
                  <br />
                  <Form.Control
                    type="t-sel"
                    placeholder="Nomor Handphone / WA"
                  />
                  <br />
                  <Button className="w-100 buttonCon" type="submit">
                    Hubungi
                  </Button>
                </Form>
              </Col>
            </Col>
            <Col xl={5} className="align-self-center">
              <Col className="testContact">
                <p>
                  <span style={{ fontSize: "20px", fontWeight: 700 }}>
                    Dengan
                  </span>{" "}
                  Belisapi saya juga makin semangat dalam memelihara kambing
                  saya, karena tau ada banyak orang yang peduli untuk ber-kurban
                  dengan kambing peliharaan saya dan saya dipercaya sebagai
                  mitra mereka dalam menyediakan hewan kurban, saya doakan semua
                  sehat-sehat dan mendapat keberkahan. Amin
                </p>
              </Col>
              <Row className="d-flex justify-content-start">
                <Col xs={2}>
                  <Image
                    src={require("../images/properties/pexels-rachel-claire-8112843 1.webp")}
                    style={{
                      borderRadius: "100%",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </Col>
                <Col xs={10}>
                  <h5 className="text-white" style={{ fontWeight: 500 }}>
                    Abdul
                  </h5>
                  <p
                    className="text-white"
                    style={{ marginTop: "-10px", fontWeight: 300 }}
                  >
                    Peternak
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default Hubungi;
