import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Service() {
  return (
    <div className="service">
      <Container>
        <AnimationTitles
          className="title mx-auto text-center"
          size="28px"
          weight="700"
        >
          <motion.span style={{ color: "black", fontWeight: "Bold" }}>
            <h3>Mengapa Memilih Layanan Kami?</h3>
          </motion.span>
          <p className="sub-heading">
            Jelajahi portofolio kami dan lihatlah bagaimana kami telah mengubah
            visi bisnis menjadi kenyataan yang tangibel melalui desain yang
            menarik dan solusi yang berdampak.
          </p>
        </AnimationTitles>
        <Row className="d-flex justify-content-around mb-5">
          <Col md={3} className="p-4">
            <Image
              src={require("../images/icons/magicpen.png")}
              style={{ width: "8%" }}
              className="mb-3"
            />
            <h5>Desain yang Profesional</h5>
            <h6 style={{ fontWeight: 300 }}>
              Kami memastikan setiap detail desain mencerminkan citra
              profesional dan nilai unik bisnis Anda.
            </h6>
          </Col>
          <Col
            md={3}
            style={{ background: "#245A80", borderRadius: "10px" }}
            className="p-4"
          >
            <Image
              src={require("../images/icons/calculator.png")}
              style={{ width: "8%" }}
              className="mb-3"
            />
            <h5 style={{ color: "white" }}>Fokus pada Konversi</h5>
            <h6 style={{ fontWeight: 300, color: "white" }}>
              Setiap desain kami didasarkan pada strategi untuk mendapatkan
              lebih banyak pelanggan.
            </h6>
          </Col>
          <Col md={3} className="p-4">
            <Image
              src={require("../images/icons/3d-rotate.png")}
              style={{ width: "8%" }}
              className="mb-3"
            />
            <h5>Desain yang Profesional</h5>
            <h6 style={{ fontWeight: 300 }}>
              Kami memastikan setiap detail desain mencerminkan citra
              profesional dan nilai unik bisnis Anda.
            </h6>
          </Col>
        </Row>

        {/* second section */}

        <Row className="d-flex justify-content-around">
          <Col
            md={3}
            className="p-4"
            style={{ background: "#245A80", borderRadius: "10px" }}
          >
            <Image
              src={require("../images/icons/alarm.png")}
              style={{ width: "8%" }}
              className="mb-3"
            />
            <h5 style={{ color: "white" }}>
              Pengalaman Pengguna yang Superior
            </h5>
            <h6 style={{ fontWeight: 300, color: "white" }}>
              Kami memprioritaskan pengalaman pengguna yang unggul dalam setiap
              desain yang kami buat.
            </h6>
          </Col>
          <Col md={3} className="p-4">
            <Image
              src={require("../images/icons/calculator.png")}
              style={{ width: "8%" }}
              className="mb-3"
            />
            <h5>Fokus pada Konversi</h5>
            <h6 style={{ fontWeight: 300 }}>
              Setiap desain kami didasarkan pada strategi untuk mendapatkan
              lebih banyak pelanggan.
            </h6>
          </Col>
          <Col
            md={3}
            className="p-4"
            style={{ background: "#245A80", borderRadius: "10px" }}
          >
            <Image
              src={require("../images/icons/money-recive.png")}
              style={{ width: "8%" }}
              className="mb-3"
            />
            <h5 style={{ color: "white" }}>Desain yang Profesional</h5>
            <h6 style={{ fontWeight: 300, color: "white" }}>
              Kami memastikan setiap detail desain mencerminkan citra
              profesional dan nilai unik bisnis Anda.
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Service;
