import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className="mb-5"
      >
        <h1>Beli Sapi Mudah Bersama Belisapi.com</h1>
        <Button className="buttonHub">Hubungi +628-9991-991</Button>
      </motion.div>
      <motion.div
        initial={{ opacity: -200 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3 line-top"
      >
        <p>© 2024 PT Ekis Muda Berkarya. All rights reserved</p>
        <p>
          Bantuan
          {" | "}
          Syarat Ketentuan {" | "} Design by{" "}
          <Link className="text-white link-underline-opacity-0" to={""}>
            AthernaNexa
          </Link>
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
