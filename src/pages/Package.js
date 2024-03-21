import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Package() {
  return (
    <div className="package position-relative">
      <Container>
        <AnimationTitles
          className="title mx-auto text-center"
          size="28px"
          weight="700"
        >
          <motion.span style={{ color: "black", fontWeight: "Bold" }}>
            <h3>Paket Layanan Kami.</h3>
          </motion.span>
          <p className="sub-heading">
            Jelajahi portofolio kami dan lihatlah bagaimana kami telah mengubah
            visi bisnis menjadi kenyataan yang tangibel melalui desain yang
            menarik dan solusi yang berdampak.
          </p>
        </AnimationTitles>
        <Row className="d-flex justify-content-center mb-5">
          <Col
            md={3}
            className="p-4 package-template d-flex align-items-start flex-column"
            style={{ backgroundColor: "#F1EAE1" }}
          >
            <Col>
              <h6 className="mb-3">Silver Paket</h6>
              <h1>1.500k</h1>
              <span style={{ fontWeight: 300 }}>
                {"(Termasuk Domain+Hosting)"}
              </span>
              <br />
              <br />
              <h6 className="tx-list-package">
                Desain landing page kelas atas dengan fokus pada konversi
              </h6>
              <h6 className="tx-list-package">
                Integrasi formulir kontak yang disesuaikan
              </h6>
              <h6 className="tx-list-package">Optimisasi SEO dasar</h6>
              <h6 className="tx-list-package">1 revisi desain</h6>
            </Col>
            <br />
            <br />
            <br />
            <br />
            <Button className="w-100 btn-ask-package">Hubungi Kami</Button>
          </Col>
          <Col
            md={3}
            className="p-4 package-template d-flex align-items-start flex-column text-white"
            style={{ backgroundColor: "#245A80" }}
          >
            <Col>
              <h6 className="mb-3">Gold Paket</h6>
              <h1>2.000k</h1>
              <span style={{ fontWeight: 300 }}>
                {"(Termasuk Domain+Hosting)"}
              </span>
              <br />
              <br />
              <h6 className="tx-list-package-white">
                Desain landing page kelas atas dengan fokus pada konversi
              </h6>
              <h6 className="tx-list-package-white">
                Integrasi formulir kontak yang disesuaikan
              </h6>
              <h6 className="tx-list-package-white">Optimisasi SEO dasar</h6>
              <h6 className="tx-list-package-white">
                Dukungan prioritas dan bantuan paska-implementasi
              </h6>
              <h6 className="tx-list-package-white">2 revisi desain</h6>
            </Col>
            <br />
            <br />
            <br />
            <br />
            <Button className="w-100 btn-ask-package">Hubungi Kami</Button>
          </Col>
          <Col
            md={3}
            className="p-4 package-template d-flex align-items-start flex-column"
            style={{ backgroundColor: "#F1EAE1" }}
          >
            <Col>
              <h6 className="mb-3">Platinum Paket</h6>
              <h1>3.500k</h1>
              <span style={{ fontWeight: 300 }}>
                {"(Termasuk Domain+Hosting)"}
              </span>
              <br />
              <br />
              <h6 className="tx-list-package">
                Desain landing page kelas atas dengan fokus pada konversi
              </h6>
              <h6 className="tx-list-package">
                Integrasi formulir kontak yang disesuaikan
              </h6>
              <h6 className="tx-list-package">Optimisasi SEO dasar</h6>
              <h6 className="tx-list-package">
                Uji A/B untuk optimisasi konversi
              </h6>
              <h6 className="tx-list-package">3 revisi desain</h6>
            </Col>
            <br />
            <br />
            <br />
            <br />
            <Button className="w-100 btn-ask-package">Hubungi Kami</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Package;
