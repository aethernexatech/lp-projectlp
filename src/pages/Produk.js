import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import axios from "axios";
import { formatNumberWithout } from "../helper";

function Produk() {
  const [product, setProduct] = useState([]);

  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  const getProduct = async () => {
    try {
      const response = await axios(`${process.env.REACT_APP_API_URL}product`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      if (response.data.status) {
        setProduct(response.data.data.data);
      } else {
        setProduct([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getWhatsApp = async (productName, minWeight, maxWeight, age_year, age_month) => {
    try {
      const response = await axios(`${process.env.REACT_APP_API_URL}${'wa-rotator'}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      });
  
      const message = `Saya ingin menanyakan produk ${productName}, berat: ${minWeight}-${maxWeight} kg, usia: ${age_year} tahun, ${age_month} bulan.`;
      const whatsappURL = `https://wa.me/${response.data.data.phone}?text=${encodeURIComponent(message)}`;
  
      return window.open(
        whatsappURL,
        '_blank',
        'rel=noopener noreferrer'
      );
    } catch (error) {
      console.error('Error fetching WhatsApp number:', error);
    }
  };
  

  useEffect(() => {
    getProduct();
  }, []);

  const cardImgStyle = {
    height: '200px',
    objectFit: 'cover' 
  };

  const cardTextStyle = {
    textAlign: 'center', 
    fontSize: '14px' 
  };

  const cardTitleStyle = {
    ...cardTextStyle,
    fontWeight: 'bold',
    fontSize: '20px'
  };

  return (
    <div className="properties">
      <Container>
        <AnimationTitles className="title mx-auto" size="28px" weight="700">
            <motion.span style={{  color: '#e9c535', fontWeight: 'Bold' }}>Pilih </motion.span>&nbsp;
            <span style={{ color: '#6b8b65', fontWeight: 'Normal' }}> Qurbanmu! </span>
        </AnimationTitles>
        <p>
          Memilih hewan qurban pada Idul Adha bukan hanya soal praktis, tetapi juga nilai-nilai mendalam. Keputusan ini mencerminkan keterlibatan dan kepedulian pada sesama, serta pelaksanaan perintah agama.
        </p>
        <motion.div initial={{ x: -80 }} whileInView={{ x: 0 }} transition={{ duration: 0.2 }}>
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              520: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1198: { slidesPerView: 5 },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            {product.filter(item => item.type === 1).map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img variant="top" src={item.image} style={cardImgStyle} />
                      <i className="fa-regular fa-heart like" onClick={like}></i>
                    </div>
                    <br></br>
                    <h5 style={cardTitleStyle}>{item.name}</h5>
                    <div style={cardTextStyle}>
                      <div>Usia: {item.age_year} Thn, {item.age_month} Bln</div>
                      <div>Berat: {item.min_weight} - {item.max_weight} kg</div>
                    </div>
                    <br></br>
                    <h4 style={cardTextStyle}>
                      Rp. {formatNumberWithout(item.price)}
                    </h4>
                    <Button className="w-100 mt-4" 
                      style={{ backgroundColor: "#597e52", border: "0px" }}
                      type="submit"
                      onClick={() => getWhatsApp(item.name, item.min_weight, item.max_weight, item.age_year,item.age_month)}
                      >
                      Tanya Produk
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <motion.div initial={{ x: -80 }} whileInView={{ x: 0 }} transition={{ duration: 0.2 }}>
          <Swiper
            slidesPerView={5}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              520: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1198: { slidesPerView: 5 },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            {product.filter(item => item.type === 2).map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img variant="top" src={item.image} style={cardImgStyle} />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <br></br>
                  <h5 style={cardTitleStyle}>{item.name}</h5>
                  <div style={cardTextStyle}>
                    <div>Usia: {item.age_year} Thn, {item.age_month} Bln</div>
                    <div>Berat: {item.min_weight} - {item.max_weight} kg</div>
                  </div>
                  <br></br>
                  <h4 style={cardTextStyle}>
                    Rp. {formatNumberWithout(item.price)}
                  </h4>
                  <Button className="w-100 mt-4" 
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                    type="submit"
                    onClick={() => getWhatsApp(item.name, item.min_weight, item.max_weight, item.age_year,item.age_month)}
                    >
                    Tanya Produk
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </div>
  );
}

export default Produk;
