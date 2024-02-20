import { Container, Accordion, Button } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import GET from "../api/api";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

// import framer motion

function Faq() {
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  const getFaq = async (param) => {
    const parameter = param ?? "";
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOjEsImlhdCI6MTcwODQxMjcxNCwiZXhwIjoxNzExMDA0NzE0fQ.Qf3QSYOWsBRejYUmtiBzl4b3ORZtgwOvp75Hb18HmCY";
    try {
      const response = await axios(`${process.env.REACT_APP_API_URL}${"faq"}`, {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        method: "GET",
      });

      console.log(response);
    } catch (error) {}
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div className="faq">
      <Container>
        <AnimationTitles title="Pertanyaan yang Sering Diajukan (FAQ)." />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Apa itu Sistem Cicilan dalam Penjualan Qurban?
            </Accordion.Header>
            <Accordion.Body>
              Sistem cicilan memungkinkan Anda membayar pembelian hewan qurban
              secara bertahap sesuai dengan kesepakatan. Dengan ini, Anda dapat
              merencanakan pembayaran yang lebih fleksibel.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Bagaimana Cara Mengajukan Cicilan untuk Pembelian Hewan Qurban?
            </Accordion.Header>
            <Accordion.Body>
              Untuk mengajukan cicilan, Anda perlu menghubungi tim penjualan
              kami atau mengikuti langkah-langkah yang tertera pada situs web
              kami. Prosesnya sederhana dan akan dibantu oleh tim customer
              service kami.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Berapa Lama Waktu Cicilan yang Dapat Dipilih?
            </Accordion.Header>
            <Accordion.Body>
              Anda dapat memilih jangka waktu cicilan yang sesuai dengan
              kemampuan finansial Anda. Kami menyediakan opsi cicilan dengan
              berbagai durasi, seperti 3, 6, atau 12 bulan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Apakah Ada Bunga atau Biaya Tambahan dalam Sistem Cicilan?
            </Accordion.Header>
            <Accordion.Body>
              Tidak, kami tidak memberlakukan bunga atau biaya tambahan pada
              sistem cicilan kami. Kami berkomitmen untuk memberikan opsi
              pembayaran yang transparan dan terjangkau.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Bagaimana Jika Ada Keterlambatan Pembayaran Cicilan?
            </Accordion.Header>
            <Accordion.Body>
              Jika terjadi keterlambatan pembayaran, kami akan memberikan
              pemberitahuan terlebih dahulu. Kami berusaha memberikan solusi
              yang terbaik dan tetap mendukung agar Anda dapat menyelesaikan
              pembayaran sesuai kesepakatan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Apakah Pembelian Langsung Tersedia Tanpa Sistem Cicilan?
            </Accordion.Header>
            <Accordion.Body>
              Ya, Anda dapat melakukan pembelian langsung tanpa menggunakan
              sistem cicilan. Silakan pilih opsi pembayaran penuh saat proses
              pembelian.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Apa yang Termasuk dalam Harga Pembelian Hewan Qurban?
            </Accordion.Header>
            <Accordion.Body>
              Harga pembelian mencakup biaya pemotongan, penyembelihan, dan
              distribusi daging qurban. Semua ini akan diatur dan diinformasikan
              secara jelas kepada Anda.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Bagaimana Proses Pengiriman atau Pengambilan Hewan Qurban?
            </Accordion.Header>
            <Accordion.Body>
              Proses pengiriman atau pengambilan akan diatur sesuai dengan
              alamat atau lokasi yang Anda tentukan. Tim kami akan menghubungi
              Anda untuk koordinasi lebih lanjut.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Apakah Ada Layanan Purna Jual atau Garansi?
            </Accordion.Header>
            <Accordion.Body>
              Kami memberikan layanan purna jual dan garansi terhadap kualitas
              dan keamanan hewan qurban. Jika ada masalah, silakan hubungi tim
              customer service kami.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Bagaimana Saya Bisa Berkontribusi atau Menjadi Mitra dalam
              Penjualan Qurban?
            </Accordion.Header>
            <Accordion.Body>
              Jika Anda tertarik menjadi mitra atau berkontribusi dalam
              penjualan qurban, silakan hubungi kami melalui formulir yang telah
              disediakan di situs web atau menghubungi tim kami. Kami senang
              menjalin kerjasama baru.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default Faq;
