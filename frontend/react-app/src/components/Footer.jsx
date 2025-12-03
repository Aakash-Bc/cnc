import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-primary mb-3">CNC Consultant</h5>
            <p className="mb-2">Civil & IT Engineering Solutions</p>
            <div className="mb-2">
              <strong>Location:</strong><br />
              Banauli, Saptari<br />
              Nepal
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-primary mb-3">Contact</h5>
            <div className="mb-2">
              <strong>Phone:</strong><br />
              <a href="tel:+979864148519" className="text-light text-decoration-none">+97 9864148519</a>
            </div>
            <div className="mb-2">
              <strong>Email:</strong><br />
              <a href="mailto:info@cnc-consultant.example" className="text-light text-decoration-none">info@cnc-consultant.example</a>
            </div>
            <div className="mb-2">
              <strong>Viber:</strong><br />
              <a href="tel:+979864148519" className="text-light text-decoration-none">+97 9864148519</a>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-primary mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/services" className="text-light text-decoration-none">Services</Link></li>
              <li className="mb-2"><Link to="/blog" className="text-light text-decoration-none">Blog</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h5 className="text-primary mb-3">FAQs</h5>
            <div className="mb-2">
              <strong>Q: What services do you offer?</strong><br />
              <small>A: Civil engineering and IT digital services.</small>
            </div>
            <div className="mb-2">
              <strong>Q: How can I contact you?</strong><br />
              <small>A: Use the contact form or call us directly.</small>
            </div>
            <div className="mb-2">
              <strong>Q: Do you provide consultations?</strong><br />
              <small>A: Yes, we offer free initial consultations.</small>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        <Row className="text-center">
          <Col>
            <p className="mb-0">&copy; {year} CNC Consultant — Civil & IT. All rights reserved.</p>
            <p className="mb-0 small">
              <a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a> | <a href="#terms" className="text-light text-decoration-none">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
