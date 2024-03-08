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
        <motion.span style={{ fontWeight: 'Bold' }}>Keunggulan </motion.span>&nbsp;
              <span style={{ color: '#6b8b65', fontWeight: 'Normal' }}> Ternakita </span>
        </AnimationTitles>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* <p>
            Kami bangga memberikan solusi unggulan dengan fokus pada inovasi
            berkualitas, pelayanan pelanggan prima, dan produk tanpa kompromi.
          </p>
          <br /> */}
          <Row className="px-4">
            <Col md={4} sm={6} xs={6} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-1.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Garansi Kualitas</h5>
              <h6>
                Kami selalu berkomitmen untuk  memastikan Anda mendapatkan
                hewan qurban terbaik. 
              </h6>
            </Col>
            <Col md={4} sm={6} xs={6} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-2.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Gratis Distribusi Se-Pulau Jawa</h5>
              <h6>
                Dengan jaringan yang luas, hewan qurban
                siap kami distribusikan ke setiap sudut Pulau Jawa secara gratis.
              </h6>
            </Col>
            <Col md={4} sm={6} xs={6} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-3.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Fleksibilitas Pembayaran</h5>
              <h6>
                Nikmati kenyamanan bertransaksi melalui opsi pembayaran
                yang Anda tentukan sendiri, dengan aman dan amanah
              </h6>
              <h6></h6>
            </Col>
          {/* </Row>
          <br/>
          <Row className="px-4"> */}
            <Col md={4} sm={6} xs={6} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-1.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Program Patungan</h5>
              <h6>
                Inovasi terdepan untuk memastikan
                tercapainya impian bersama dalam ibadah qurban
              </h6>
            </Col>
            <Col md={4} sm={6} xs={6} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-2.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Pelayanan Terpadu</h5>
              <h6>
                Layanan unggulan Tim terdekat dengan Anda, memastikan
                kemudahan akses dan kepuasan bagi pelanggan kami
              </h6>
            </Col>
            <Col md={4} sm={6} xs={6} className="flex-column">
              <Image
                src={require("../images/keunggulan/k-3.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Jemput Kandang</h5>
              <h6>
                Fasilitas penjemputan survey hewan ke
                kandang ternak terdekat secara gratis
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
