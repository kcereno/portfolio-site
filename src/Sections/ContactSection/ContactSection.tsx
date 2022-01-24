import { Container, Col, Form, Button, Row } from "react-bootstrap";

export default function ContactSection() {
  return (
    <section id="contact" className="text-white py-5">
      <Container>
        <Row>
          <Col lg={4}>
            <h2 className="display-5 text-center">Contact</h2>
          </Col>
          <Col>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="contactName">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Control as="textarea" placeholder="Message" rows={3} />
                </Form.Group>
                <Button className="button" variant="outline-light">
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
