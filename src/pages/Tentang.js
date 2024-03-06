import { Col, Container, Image, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';


function Tentang() {
  const [soldAnimals, setSoldAnimals] = useState(0);
  const [users, setUsers] = useState(0);
  const [farmers, setFarmers] = useState(0);

  // Fungsi untuk menginisialisasi efek counter
  const startCounterAnimation = () => {
    // Fungsi untuk menginisialisasi counter secara bertahap
    const initializeCounter = (targetValue, setterFunction) => {
      let counter = 0;
      const increment = Math.ceil(targetValue / 100);
      const interval = setInterval(() => {
        counter += increment;
        if (counter >= targetValue) {
          clearInterval(interval);
          counter = targetValue;
        }
        setterFunction(counter);
      }, 10);
    };

    // Menginisialisasi efek counter untuk masing-masing nilai
    initializeCounter(2417, setSoldAnimals);
    initializeCounter(3987, setUsers);
    initializeCounter(35, setFarmers);
  };

  // Memulai efek counter ketika komponen dimuat
  useEffect(() => {
    startCounterAnimation();
  }, []);
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
              <motion.span style={{ fontWeight: 'Bold' }}>Tentang </motion.span>&nbsp;
              <span style={{ color: '#6b8b65', fontWeight: 'Normal' }}> Ternakita </span>
            </AnimationTitles>
            <p className="mt-3 text-center text-lg-start">
              Program "Qurban Mudah Kita Semua Bisa" dirancang untuk memfasilitasi seluruh kalangan masyarakat dalam berqurban.
            </p>
            <h6 className="mt-3 text-center text-lg-start" style={{ color: '#6b8b65' }}>
              Program ini menawarkan fleksibilitas yang unik di mana setiap individu dapat menyesuaikan pilihan berdasarkan kebutuhan dan kemampuan finansial. 
              Inisiatif ini membuka pintu bagi lebih banyak orang untuk berpartisipasi dalam ibadah qurban, memastikan bahwa tidak ada yang terhalang oleh kendala apapun.
            </h6>
            <Row className="justify-content-center text-lg-start">
              {/* Statistik */}
              <Col xs={4} className="d-flex justify-content-center text-center mb-3 mb-lg-0">
              <FontAwesomeIcon icon={faCow} style={{ fontSize: "30px", color: "#e9c535" }} className="me-2" />
                <div>
                  <h3 style={{ color: "#6b8b65" }}>{soldAnimals}</h3>
                  <h6>Hewan Terjual</h6>
                </div>
              </Col>
              <Col xs={4} className="d-flex justify-content-center text-center mb-3 mb-lg-0">
              <FontAwesomeIcon icon={faUser} style={{ fontSize: "30px", color: "#e9c535" }} className="me-2" />
                <div>
                  <h3 style={{ color: "#6b8b65" }}>{users}</h3>
                  <h6>Pengguna</h6>
                </div>
              </Col>
              <Col xs={4} className="d-flex justify-content-center text-center mb-3 mb-lg-0">
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: "30px", color: "#e9c535"}} className="me-2" />
                <div>
                  <h3 style={{ color: "#6b8b65" }}>{farmers}</h3>
                  <h6 >Peternak</h6>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Image
              src={require('../images/headers/sapi-header4.jpg')}
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Tentang;
