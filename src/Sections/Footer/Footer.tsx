import { Container } from "react-bootstrap";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="footer" className="text-center text-white py-5">
      <div>
        <Container>
          <p>@ Karl Annthony Cereno {currentYear}</p>
        </Container>
      </div>
    </section>
  );
}
