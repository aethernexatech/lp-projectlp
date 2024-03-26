import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="header position-relative">
      <Container className="text-center" fluid>
        <Col className="p-5">
          <h4 className="font-link">
            OPTIMALKAN POTENSI BISNIS ANDA DENGAN SOLUSI KAMI.
          </h4>
          <p className="sub-heading">
          Bersiap untuk pertumbuhan bisnis yang luar biasa.
          Dari branding hingga antarmuka pengguna, 
          meningkatkan eksposur dan penjualan untuk sukseskan bisnis Anda.
          </p>
        </Col>
        <Row className="d-flex justify-content-center mb-5">
          <Col md={6} className="text-end">
            <Button className="btn-miliki-sekarang">
              Miliki Sekarang &nbsp; <FontAwesomeIcon icon={faArrowRight} size={50} />
            </Button>
          </Col>
          <Col md={6} className="text-start">
            <Button className="btn-hubungi">Hubungi Kami</Button>
          </Col>
        </Row>
        <Image src={require("../images/hero/hero-1.png")} className="w-100" />
      </Container>
    </div>
  );
}

export default Hero;
