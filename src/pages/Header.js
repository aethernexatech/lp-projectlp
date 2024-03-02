import React, { useState } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import AnimationTitles from '../components/functions/AnimationTitles';
import axios from 'axios';



function Loading() {
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="loading position-relative">
      <Image src={require('../images/headers/sapi-header.jpg')} className="imageHeader w-100" />
      <Container
        id="container-header"
        className="d-flex align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden pb-3 text-center text-md-start"
      >
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className="w-100"
        >
          <Image
            src={require("../images/logo/ternakita.png")}
            alt="Ternakita Logo"
            className="img-logo mb-3"
            style={{ width: '150px', height: 'auto', maxWidth: '100%' }}
          />
          <AnimationTitles size="32px" weight="700">
            <motion.span>QURBAN </motion.span>&nbsp;
            <span style={{ color: '#FFFFFF' }}> MUDAH </span>&nbsp;
            <motion.span>KITA</motion.span>&nbsp;
            <span style={{ color: '#FFFFFF' }}>SEMUA BISA </span>
          </AnimationTitles>

          <p className="mt-3">
            Ternakita : Solusi Digital Inovatif,
            Memudahkan Qurban Anda, Membantu Peternak,
            Kapanpun, Dimanapun. Momen Qurban Lebih Bermakna, Terjangkau, Untuk Kita Semua.
          </p>
          <Button variant="primary" className="mt-4">Qurban Sekarang!</Button>
        </motion.div>
      </Container>
      <Button
        style={{
          position: 'fixed',
          bottom: '5%',
          right: '3%',
          zIndex: 1,
          backgroundColor: 'transparent',
          border: '0px',
        }}
        onClick={getWhatsApp}
        title="Chat via WhatsApp"
      >
        <Image
          src={require("../images/illustration/wa.png")}
          alt="WhatsApp"
          width={40}
          height={40}
        />
      </Button>
    </div>
  );
}

export default Loading;
