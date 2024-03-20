import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Bonus() {
  return (
    <div className="bonus position-relative">
      <Container>
        <AnimationTitles
          className="title mx-auto text-center"
          size="28px"
          weight="700"
        >
          <motion.span style={{ color: "black", fontWeight: "Bold" }}>
            <h3>Bonus Tambahan.</h3>
          </motion.span>
          <p className="sub-heading">
            Jelajahi portofolio kami dan lihatlah bagaimana kami telah mengubah
            visi bisnis menjadi kenyataan yang tangibel melalui desain yang
            menarik dan solusi yang berdampak.
          </p>
        </AnimationTitles>
        <Row className="d-flex justify-content-center mb-5">
          <Col md={2} className="p-4 bonus-package">
            <Image
              src={require("../images/bonus/bonus-1.png")}
              className="img-bonus"
            />
            <br />
            <br />
            <h6>Panduan Wordpress dan Landing Page</h6>
            <br />
            <h1>299K</h1>
            <br />
            <h5>
              Panduan Pembuatan Landing Page yang disediakan dalam bentuk video
              sangat mudah dipahami.
            </h5>
          </Col>
          <Col md={2} className="p-4 bonus-package">
            <Image
              src={require("../images/bonus/bonus-2.png")}
              className="img-bonus"
            />
            <br />
            <br />
            <h6>Panduan Wordpress dan Landing Page</h6>
            <br />
            <h1>299K</h1>
            <br />
            <h5>
              Panduan Pembuatan Landing Page yang disediakan dalam bentuk video
              sangat mudah dipahami.
            </h5>
          </Col>
          <Col md={2} className="p-4 bonus-package">
            <Image
              src={require("../images/bonus/bonus-3.png")}
              className="img-bonus"
            />
            <br />
            <br />
            <h6>Panduan Wordpress dan Landing Page</h6>
            <br />
            <h1>299K</h1>
            <br />
            <h5>
              Panduan Pembuatan Landing Page yang disediakan dalam bentuk video
              sangat mudah dipahami.
            </h5>
          </Col>
        </Row>
        <Button className="btn-get-now">Dapatkan Sekarang</Button>
      </Container>
    </div>
  );
}

export default Bonus;
