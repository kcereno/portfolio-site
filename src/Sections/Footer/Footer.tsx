import { Container } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="footer" className="text-center text-white py-4">
      <div>
        <Container>
          <p>@ Karl Cereno {currentYear}</p>
        </Container>
      </div>
    </section>
  );
}
