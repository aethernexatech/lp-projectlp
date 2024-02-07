import { Button, Col, Card, Row, Image } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
// import framer motion

function Cicilan() {
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="subscribe">
      <Row className="d-flex align-item-start">
        {/* <Col md={1} /> */}
        <Col md={5} className="align-item-start px-5">
          <AnimationTitles title="Program Cicilan" />
          <p>
            <b>1. Fleksibilitas Pembayaran:</b>
            <br /> Nikmati kemudahan pembayaran dengan opsi angsuran yang dapat
            disesuaikan dengan keuangan Anda.
          </p>
          <br />
          <p>
            <b>2. Sapi Berkualitas:</b> <br /> Dapatkan sapi berkualitas tanpa
            harus membayar secara tunai secara penuh di awal.
          </p>
          <br />
          <p>
            <b>3. Dukungan Pertumbuhan Bisnis: </b> <br /> Program ini dirancang
            untuk mendukung impian peternak dalam memulai atau memperluas
            kawanan sapi mereka.
          </p>
          <br />
          <p>
            <b>4. Solusi Keuangan Terjangkau:</b> <br />
            Kami menawarkan solusi keuangan yang terjangkau untuk membantu Anda
            mengembangkan bisnis peternakan tanpa beban keuangan yang berat.
          </p>
          <br />
        </Col>
        <Col md={1} />
        <Col md={6} className="px-5">
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
          >
            <SwiperSlide>
              {" "}
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
                      <h4 className=" xl">Rp 200,000,000</h4>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-1">
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
                      <h4 className=" xl">Rp 200,000,000</h4>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
          <br />
          <p>Pilihan cicilan bulanan sudah termasuk ujrah kafalah Rp 589,000</p>
          <h5 className="h2">24 x Rp 20,000,000 </h5>
          <h6>Tanggal 02 Januari 2024 s.d. 02 Desember 2025</h6>
          <br />
          <h5 className="h2">18 x Rp 20,000,000 </h5>
          <h6>Tanggal 02 Januari 2024 s.d. 02 Desember 2025</h6>
          <br />
          <h5 className="h2">12 x Rp 20,000,000 </h5>
          <h6>Tanggal 02 Januari 2024 s.d. 02 Desember 2025</h6>
          <br />
          <h5 className="h2">6 x Rp 20,000,000 </h5>
          <h6>Tanggal 02 Januari 2024 s.d. 02 Desember 2025</h6>
          <br />
        </Col>
      </Row>
    </div>
  );
}

export default Cicilan;
