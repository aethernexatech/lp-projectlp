import { Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Tentang() {
  return (
    <motion.div
      style={{ marginTop: "0px" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="partners"
    >
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6} className="mt-5 text-center text-lg-start">
            <AnimationTitles size="32px" weight="700">
              <span style={{ color: '#6b8b65' }}> Tentang Ternakita </span>
            </AnimationTitles>
            <p className="mt-3 text-center text-lg-start">
              Program "Qurban Mudah Kita Semua Bisa" dari ternakita.com hadir untuk memudahkan masyarakat dalam melaksanakan ibadah qurban. 
              Hadir dengan solusi praktis melalui pemesanan hewan qurban secara online dapat menghemat waktu, biaya, dan proses pembelian.
            </p>
            <h6 className="mt-3 text-center text-lg-start">
              Keunggulan program kita ini adalah sistem pembayaran yang mudah dan menyesuaikan dengan kebutuhan anda serta fleksibilitas dalam memilih jenis hewan qurban. 
              Program ini hadir untuk meningkatkan partisipasi masyarakat dalam melakukan ibadah qurban dan memberikan dampak positif di lingkungan masyarakat pada saat hari raya qurban (idul adha).
            </h6>
            <Row className="justify-content-center text-lg-start">
              {/* Statistik */}
              {["2K Hewan Terjual", "3987 Pengguna", "35 Peternak"].map((stat, index) => (
                <Col xs={4} key={index} className="d-flex justify-content-center text-center mb-3 mb-lg-0">
                  <Image
                    src="https://sebisaku.id/images/icons/medal.svg"
                    style={{ width: "30px", height: "30px" }}
                    className="me-2"
                  />
                  <div>
                    <h3>{stat.split(" ")[0]}</h3>
                    <h6>{stat.split(" ").slice(1).join(" ")}</h6>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6}>
            <Image
              src={"https://sebisaku.id/images/common/bg-1.jpeg"}
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Tentang;
