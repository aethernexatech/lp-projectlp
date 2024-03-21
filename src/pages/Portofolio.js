import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Portofolio() {
  return (
    <div className="portofolio position-relative">
      <Container>
        <AnimationTitles
          className="title mx-auto text-center"
          size="28px"
          weight="700"
        >
          <motion.span style={{ color: "black", fontWeight: "Bold" }}>
            <h3>Portofolio Kami.</h3>
          </motion.span>
          <p className="sub-heading">
            Jelajahi portofolio kami dan lihatlah bagaimana kami telah mengubah
            visi bisnis menjadi kenyataan yang tangibel melalui desain yang
            menarik dan solusi yang berdampak.
          </p>
        </AnimationTitles>
        <Row className="d-flex justify-content-around mb-5">
          <Col md={3} className="mt-4">
            <Image
              src={require("../images/porto/porto-1.png")}
              className="w-100"
            />
          </Col>
          <Col md={3} className="mt-4">
            <Image
              src={require("../images/porto/porto-2.png")}
              className="w-100"
            />
          </Col>
          <Col md={3} className="mt-4">
            <Image
              src={require("../images/porto/porto-3.png")}
              className="w-100"
            />
          </Col>
        </Row>

        {/* second section */}

        <Row className="d-flex justify-content-around">
          <Col md={3} className="mt-4">
            <Image
              src={require("../images/porto/porto-4.png")}
              className="w-100"
            />
          </Col>
          <Col md={3} className="mt-4">
            <Image
              src={require("../images/porto/porto-5.png")}
              className="w-100"
            />
          </Col>
          <Col md={3} className="mt-4">
            <Image
              src={require("../images/porto/porto-6.png")}
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portofolio;
