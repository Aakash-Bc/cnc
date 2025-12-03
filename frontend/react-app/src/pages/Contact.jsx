import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', department: 'general', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error(err);
    }
  };

  return (
    <Container fluid className="py-5" style={{ minHeight: '100vh' }}>
      <h1 className="mb-4 text-center">Contact Us</h1>

      <Row>
        <Col lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              {submitted && <Alert variant="success">Message sent successfully! We'll get back to you soon.</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="abc@email.com"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone (Optional)</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+97 (000000000)"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Department of Interest</Form.Label>
                  <Form.Select name="department" value={formData.department} onChange={handleChange}>
                    <option value="general">General Inquiry</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="it">IT & Digital</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or inquiry..."
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">Send Message</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mt-4 mt-lg-0">
          <Card className="bg-light shadow-sm">
            <Card.Body>
              <h3 className="text-primary">Get in Touch</h3>

              <div className="mb-4 mt-4">
                <h5 className="text-primary">Address</h5>
                <p style={{ color: '#000', }}>Banauli,Saptari<br />Nepal</p>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">Phone</h5>
                <p style={{ color: '#000' }}><a href="tel:+15550100"style={{ color: '#000', textDecoration: 'none' }}>+97 9864148519</a></p>
              </div>

              <div>
                <h5 className="text-primary">Email</h5>
                <p style={{ color: '#000' }}><a href="mailto:info@cnc-consultant.example" style={{ color: '#000', textDecoration: 'none' }}>info@cnc-consultant.example</a></p>
              </div>

              <div className="mb-4">
                <h5 className="text-primary">Viber</h5>
                <p style={{ color: '#000' }}><a href="tel:+15550100"style={{ color: '#000', textDecoration: 'none' }}>+97 9864148519</a></p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
