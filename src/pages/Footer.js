import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from 'axios';

function Footer() {
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
    <footer>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.2 }}
        className="mb-5"
      >
        <h1>Qurban Mudah untuk Kita, Bersama Ternakita</h1>
        <br></br>
        <Button className="buttonHub"
        type="submit"
        onClick={() => getWhatsApp()}>
        Hubungi Kami!</Button>
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
            AetherNexaTechnology
          </Link>
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
