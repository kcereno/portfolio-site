import { useState } from "react";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const emailForm = () => {
    emailjs
      .send(
        "service_2qqh8n9",
        "template_t78185m",
        toSend,
        "user_rNMPCxOjM6uqr58jypKm6"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err.text);
      });
  };

  const resetForm = () => {
    setToSend({
      from_name: "",
      message: "",
      reply_to: "",
    });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    emailForm();
    alert("message sent");
    resetForm();
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="text-white py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className="display-5 text-center">Contact</h2>
          </Col>
          <Col>
            <div>
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    name="from_name"
                    onChange={handleChange}
                    value={toSend.from_name}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="reply_to"
                    onChange={handleChange}
                    value={toSend.reply_to}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Message"
                    name="message"
                    rows={3}
                    onChange={handleChange}
                    value={toSend.message}
                  />
                </Form.Group>
                <Button
                  className="button"
                  type="submit"
                  variant="outline-light"
                >
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

//service_2qqh8n9
