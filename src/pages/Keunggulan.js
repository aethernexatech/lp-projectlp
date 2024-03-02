// import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Card, Col, Row, Image, Container } from "react-bootstrap";
import { motion } from "framer-motion";
// const { Container } = require("react-bootstrap");

function Keunggulan() {
  return (
    <div className="join">
      <Container>
        <AnimationTitles className="title mx-auto" size="28px" weight="700">
          <span style={{ color: '#6b8b65' }}> Keunggulan Ternakita </span>&nbsp;
        </AnimationTitles>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p>
            Kami bangga memberikan solusi unggulan dengan fokus pada inovasi
            berkualitas, pelayanan pelanggan prima, dan produk tanpa kompromi.
          </p>
          <br />
          <Row className="px-4">
            <Col md={4} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-1.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Garansi Kualitas & Pelayanan</h5>
              <h6>
                Kami selalu berkomitmen untuk memberikan inovasi terdepan dalam
                setiap produk dan layanan kami, memastikan Anda mendapatkan
                pengalaman yang tak tertandingi
              </h6>
            </Col>
            <Col md={4} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-2.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Distribusi Seluruh Pulau Jawa</h5>
              <h6>
                Dengan jaringan luas kami, kami siap menyediakan produk dan
                layanan unggulan kami ke setiap sudut Pulau Jawa, memberikan
                kemudahan akses dan kepuasan bagi pelanggan kami
              </h6>
            </Col>
            <Col md={4} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-3.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Fleksibilitas Pembayaran</h5>
              <h6>
                Nikmati kenyamanan bertransaksi dengan opsi pembayaran kami,
                termasuk cicilan tanpa bunga, metode pembayaran online yang
                aman, dan transfer bank yang mudah
              </h6>
              <h6></h6>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default Keunggulan;
