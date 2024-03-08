import { Container, Accordion, Button } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";
import GET from "../api/api";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";

// import framer motion

function Faq() {
  const [faq, setFaq] = useState([]);

  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  const getFaq = async (param) => {
    try {
      const response = await axios(`${process.env.REACT_APP_API_URL}${"faq"}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      setFaq(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div className="faq">
      <Container>
        <AnimationTitles className="title mx-auto" size="24px" weight="700">
          <span style={{ color: "#6b8b65" }}>
            {" "}
            Pertanyaan yang Sering Diajukan (FAQ)
          </span>
          &nbsp;
        </AnimationTitles>
        <Accordion defaultActiveKey="0">
          {faq.map((item, index) => {
            return (
              <Accordion.Item key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#f2f4f7" }}>
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </div>
  );
}

export default Faq;
