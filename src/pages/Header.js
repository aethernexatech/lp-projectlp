import React, { useEffect, useState } from "react";
import { Button, Container, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import axios from "axios";

function Header() {
  const [type, setType] = useState("");
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const getWhatsApp = () => {
    return window.open(
      `https://wa.me/+628170510019`,
      "_blank",
      "rel=noopener noreferrer"
    );
  };

  useEffect(() => {
    if (isMobileDevice()) {
      setType(true);
    } else {
      setType(false);
    }
  }, []);

  return (
    <div className="header position-relative">
      {/* <Container className="text-center"> */}
      {!type ? (
        <Container className="text-center">
          <Image
            src={require("../images/web/lp-agen-web-1.png")}
            className="img-web"
            style={{ width: "80%" }}
          />
          <Col className="d-flex justify-content-center p-3">
            <button
              class="btn-agen"
              role="button"
              onClick={() => getWhatsApp()}
            >
              Daftar Agen Sekarang !!
            </button>
          </Col>
          <Image
            src={require("../images/web/lp-agen-web-2.png")}
            className="img-web"
            style={{ width: "80%" }}
          />
          <Image
            src={require("../images/web/lp-agen-web-3.png")}
            className="img-web"
            style={{ width: "80%" }}
          />
          <Image
            src={require("../images/web/lp-agen-web-4.png")}
            className="img-web"
            style={{ width: "80%" }}
          />
          <Col className="d-flex justify-content-center p-3">
            <button
              class="btn-agen"
              role="button"
              onClick={() => getWhatsApp()}
            >
              Daftar Agen Sekarang
            </button>
          </Col>
          <Image
            src={require("../images/web/lp-agen-web-5.png")}
            className="img-web"
            style={{ width: "80%" }}
          />
          <Image
            src={require("../images/web/lp-agen-web-6.png")}
            className="img-web"
            style={{ width: "80%" }}
          />
        </Container>
      ) : (
        <>
          <Image
            src={require("../images/mobile/lp-agen-mobile-1.png")}
            className="img-mobile"
            style={{ width: "100%" }}
          />
          <Image
            src={require("../images/mobile/lp-agen-mobile-2.png")}
            className="img-mobile"
            style={{ width: "100%" }}
          />
          <Image
            src={require("../images/mobile/lp-agen-mobile-3.png")}
            className="img-mobile"
            style={{ width: "100%" }}
          />
          <Image
            src={require("../images/mobile/lp-agen-mobile-4.png")}
            className="img-mobile"
            style={{ width: "100%", marginBottom: "20%" }}
          />
          <Col
            className="d-flex justify-content-center p-3"
            style={{ position: "fixed", bottom: 0, width: "100%" }}
          >
            <button
              class="btn-agen"
              role="button"
              onClick={() => getWhatsApp()}
            >
              Daftar Agen Sekarang !!
            </button>
          </Col>
        </>
      )}
      {/* </Container> */}
    </div>
  );
}

export default Header;
