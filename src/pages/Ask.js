import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Ask() {
  return (
    <div className="ask position-relative">
      <Container>
        <AnimationTitles
          className="title mx-auto text-center"
          size="28px"
          weight="700"
        >
          <motion.span style={{ color: "black", fontWeight: "Bold" }}>
            <h3>Tanya Kami.</h3>
          </motion.span>
          <p className="sub-heading">
            Jelajahi portofolio kami dan lihatlah bagaimana kami telah mengubah
            visi bisnis menjadi kenyataan yang tangibel melalui desain yang
            menarik dan solusi yang berdampak.
          </p>
        </AnimationTitles>
        <Form>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>
                <h6 className="tx-form-label">Nama</h6>
              </Form.Label>
              <Form.Control className="form-control" placeholder="Nama" />
            </Col>
            <Col md={6}>
              <Form.Label>
                <h6 className="tx-form-label">No. Handphone</h6>
              </Form.Label>
              <Form.Control
                className="form-control"
                placeholder="No. Handphone"
              />
            </Col>
          </Row>
          <Col className="mb-4">
            <Form.Label>
              <h6 className="tx-form-label">Pertanyaan</h6>
            </Form.Label>
            <Form.Control
              className="form-control"
              placeholder="Pertanyaan"
              as="textarea"
            />
          </Col>
          <Button className="btn-form-submit w-100">
            Hubungi Kami Sekarang
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Ask;
