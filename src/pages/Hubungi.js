import { Button, Container, Col, Row, Image, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import axios from "axios";
import { useEffect, useState } from "react";

function Hubungi() {
  const getWhatsApp = async () => {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API_URL}${"contact-us"}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            name: document.getElementById("name").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
            program_id: 1,
            product_id: 1,
          }),
          method: "POST",
        }
      );

      return window.open(
        `https://wa.me/${response.data.data.phone}?text=Halo Saya ${
          document.getElementById("name").value
        }, saya ingin bertanya tentang program TernaKita`,
        "_blank",
        "rel=noopener noreferrer"
      );
    } catch (error) {}
  };

  return (
    <div className="hubungi">
      <Container className="">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Row>
            <Col xl={6}>
              <Col className="contact">
                <h3>Tanya tentang program kami</h3>
                <p>
                  Kirimkan pesan kepada kami dan tim kami akan segera
                  menghubungi Anda
                </p>
                <Form.Control
                  type="text"
                  placeholder="Nama Lengkap"
                  id="name"
                />
                <br />
                <Form.Control
                  type="number"
                  id="phone"
                  maxLength={12}
                  placeholder="Nomor Handphone / WA"
                />
                <br />
                <Form.Control
                  type="text"
                  id="message"
                  maxLength={12}
                  placeholder="Pesan"
                />
                <br />
                <Button
                  className="w-100 buttonCon"
                  type="submit"
                  onClick={() => getWhatsApp()}
                >
                  Hubungi
                </Button>
              </Col>
            </Col>
            <Col xl={5} className="align-self-center">
              <Col className="testContact">
                <p>
                  <span style={{ fontSize: "20px", fontWeight: 700 }}>
                    Dengan Ternakita
                  </span>{" "}
                  saya juga makin semangat dalam memelihara sapi
                  saya, karena tau ada banyak orang yang peduli untuk ber-kurban
                  dan saya dipercaya sebagai
                  mitra untuk menyediakan hewan kurban, saya doakan semua
                  sehat-sehat dan mendapat keberkahan. Amin
                </p>
              </Col>
              <Row className="d-flex justify-content-start">
                <Col xs={2}>
                  <Image
                    src={require("../images/properties/pexels-rachel-claire-8112843 1.webp")}
                    style={{
                      borderRadius: "100%",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </Col>
                <Col xs={10}>
                  <h5 className="text-white" style={{ fontWeight: 500 }}>
                    Bapak Kodir
                  </h5>
                  <p
                    className="text-white"
                    style={{ marginTop: "-10px", fontWeight: 300 }}
                  >
                    Peternak
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default Hubungi;
