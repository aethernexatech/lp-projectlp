import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <div className="about position-relative">
      <Container>
        <Row className="d-flex justify-content-center mb-3">
          <Col md={6} className="text-right mt-4">
            <h4>Berdedikasi dalam Membangun Produk Berkualitas.</h4>
            <h6>
              Jika Anda mencari partner yang dapat diandalkan untuk membantu
              Anda mencapai keberhasilan online, Anda telah datang ke tempat
              yang tepat.
            </h6>
          </Col>
          <Col md={6} className="text-center mt-4">
            <Image
              src={require("../images/hero/hero-2.png")}
              className="w-75"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-3">
          <Col>
            <h5>600+</h5>
            <h6>Variasi Desain Template</h6>
          </Col>
          <Col>
            <h5>1000+</h5>
            <h6>Tersedia dalam Format JSON</h6>
          </Col>
          <Col>
            <h5>50+</h5>
            <h6>Produk Digital Telah Dibuat</h6>
          </Col>
          <Col>
            <h5>600+</h5>
            <h6>Font dan Assets Premium</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
