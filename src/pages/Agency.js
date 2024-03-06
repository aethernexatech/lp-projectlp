import AnimationTitles from "../components/functions/AnimationTitles";
import { Button, Col, Row, Image, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from 'axios';
function Agency() {
    const getWhatsApp = async () => {
        try {
            const response = await axios(`${process.env.REACT_APP_API_URL}${'wa-rotator'}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            });

            return window.open(
            `https://wa.me/${response.data.data.phone}`,
            '_blank',
            'rel=noopener noreferrer'
            );
        } catch (error) {
            console.error('Error fetching WhatsApp number:', error);
        }
        };
  return (
    <div className="join">
      <Container>
        <AnimationTitles className="title mx-auto" size="28px" weight="700">
        <motion.span style={{ fontWeight: 'Bold' }}>Agen </motion.span>&nbsp;
              <span style={{ color: '#6b8b65', fontWeight: 'Normal' }}> Ternakita </span>
        </AnimationTitles>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p>
            Bergabung dengan ternakita sebagai Agen, lalu dapatkan keuntungannya.
          </p>
          <br />
          <Row className="px-4">
            <Col md={4} sm={4} xs={4} className="flex-column">
              <Image
                src={require("../images/agency/k-1.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Penghasilan</h5>
              <h6>
                Hak yang didapat dari kinerja penjualan
              </h6>
            </Col>
            <Col md={4} sm={4} xs={4} className="flex-column">
              <Image
                src={require("../images/agency/k-1.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Pelatihan Gratis</h5>
              <h6>
                Menjadi agen tersertifikasi
              </h6>
            </Col>
            <Col md={4} sm={4} xs={4} className="flex-column">
              <Image
                src={require("../images/agency/k-2.png")}
                style={{ width: "70px", marginBottom: "20px" }}
              />
              <h5>Tunjangan Operasional</h5>
              <h6>
                Kegiatan operasional agen ditanggung oleh perusahaan
              </h6>
            </Col>
          </Row>
          <Row>
            <Col>
                <Button className="buttonHub"
                    type="submit"
                    onClick={() => getWhatsApp()}>
                    Jadi Agen
                </Button>
            </Col>
          </Row>
          <Row>
            <br></br>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default Agency;
