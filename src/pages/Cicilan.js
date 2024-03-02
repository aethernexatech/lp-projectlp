import React from 'react';
import { Button, Col, Card, Row, Image } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Cicilan() {
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="subscribe">
      <Row className="d-flex align-items-start">
        <Col xs={12} md={5} className="px-3 px-md-5">
          <AnimationTitles title="Program Tabungan" />
          <p>
            <b>1. Fleksibilitas Pembayaran:</b>
            <br /> Nikmati kemudahan pembayaran dengan opsi tabungan yang dapat
            disesuaikan dengan keuangan Anda.
          </p>
          <p>
            <b>2. Hewan Berkualitas:</b>
            <br /> Dapatkan hewan qurban berkualitas dengan kelengkapan vaksin dan vitamin.
          </p>
          <p>
            <b>3. Dukungan Pertumbuhan Bisnis:</b>
            <br /> Program ini dirancang untuk mendukung impian peternak dalam memulai atau mengembangkan
            hasil ternak hewan qurban mereka.
          </p>
          <p>
            <b>4. Solusi Keuangan Terjangkau:</b>
            <br /> Kami menawarkan solusi pembayaran yang terjangkau untuk membantu Anda dalam menyesuaikan urusan duniawi maupun akhirat.
          </p>
        </Col>
        <Col xs={12} md={6} className="px-3 px-md-5">
          <Swiper
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <Row>
                    <Col md={4}>
                      <Image
                        className="w-100"
                        alt="img"
                        src={require("../images/sapi-product/sapi2.png")}
                      />
                    </Col>
                    <Col md={8}>
                      <h5 className="mt-2 fw-normal">Sapi Limosin</h5>
                      <h4 className="xl">Rp 200,000,000</h4>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </SwiperSlide>
            {/* Ulangi SwiperSlide untuk setiap slide yang Anda ingin tampilkan */}
          </Swiper>
          <p>Pilihan cicilan bulanan sudah termasuk ujrah kafalah Rp 589,000</p>
          {/* Detail cicilan */}
        </Col>
      </Row>
    </div>
  );
}

export default Cicilan;
