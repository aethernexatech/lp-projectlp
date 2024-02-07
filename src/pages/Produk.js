// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Produk() {
  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="properties">
      <Container>
        <AnimationTitles
          className="title mx-auto"
          title="Pilih sendiri Hewan Qurban mu."
        />
        <p>
          Memilih hewan qurban pada Idul Adha bukan hanya soal praktis, tetapi
          juga nilai-nilai mendalam. Keputusan ini mencerminkan keterlibatan dan
          kepedulian pada sesama, serta pelaksanaan perintah agama.
        </p>
        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
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
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi1.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Limosin</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>

                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi2.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Simental</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi3.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Ongole</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi4.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Braham</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi5.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Bali</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi6.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Madura</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
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
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi1.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Limosin</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>

                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi2.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Simental</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi3.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Ongole</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi4.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Braham</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi5.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Bali</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/sapi-product/sapi6.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sapi Madura</h5>
                  <div className="d-flex mb-2">
                    <div className="me-3">
                      <span className="gray-90">Umur</span>
                      <h6>2 Tahun</h6>
                    </div>
                    <div>
                      <span className="gray-90">Berat</span>
                      <h6>150 - 200 Kg</h6>
                    </div>
                  </div>
                  <h4 className=" xl">Rp 200,000,000</h4>
                  <Button
                    className="w-100 mt-4"
                    style={{ backgroundColor: "#597e52", border: "0px" }}
                  >
                    Lihat Detail
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Produk;
