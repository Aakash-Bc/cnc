import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About({ department }) {
  return (
    <Container fluid className="py-5" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Row className="mb-5">
        <Col className="text-center">
          <div className="position-relative d-inline-block">
            <h4 className="text-primary mb-4 fw-bold" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              background: 'linear-gradient(45deg, #0f62fe, #0056b3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textTransform: 'capitalize'
            }}>
              About<br />CNC Consultant
            </h4>
            <div className="position-absolute top-50 start-50 translate-middle" style={{
              width: '120px',
              height: '4px',
              background: 'linear-gradient(45deg, #0f62fe, #0056b3)',
              borderRadius: '2px',
              zIndex: -1,
              opacity: 0.3
            }}></div>
          </div>
          <p className="lead text-muted fw-light" style={{
            fontSize: '1.25rem',
            lineHeight: '1.6',
            color: '#6c757d',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            CNC Consultant brings together civil engineering expertise and modern IT solutions to help clients deliver projects safely, on time and within budget.
          </p>
        </Col>
      </Row>

      {/* Vision Section */}
      <Row className="mb-5">
        <Col lg={10} className="mx-auto">
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h2 className="text-primary mb-3">Our Vision</h2>
              <p className="fs-5">
                To make construction smarter and more efficient through integrated engineering and technology.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col lg={10} className="mx-auto">
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h2 className="text-primary mb-3">Our Team</h2>
              <p className="fs-5 mb-4">
                Our team includes chartered civil engineers, structural designers, BIM specialists, software engineers, and site systems integrators. We blend practical field experience with digital-first methods.
              </p>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="bg-light p-3 rounded">
                    <h5 className="text-primary">Civil Engineering</h5>
                    <p>Chartered engineers and structural designers with decades of experience.</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="bg-light p-3 rounded">
                    <h5 className="text-primary">IT & Digital</h5>
                    <p>BIM specialists and software engineers driving digital transformation.</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us Section */}
      <Row>
        <Col lg={10} className="mx-auto">
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h2 className="text-primary mb-4">Why Choose Us ?</h2>
              <Row>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <strong>✓</strong>
                    </div>
                    <div>
                      <h6>Cross-disciplinary delivery (civil + IT)</h6>
                      <p className="text-muted mb-0">Integrated solutions for comprehensive project support.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <strong>✓</strong>
                    </div>
                    <div>
                      <h6>Practical, buildable designs</h6>
                      <p className="text-muted mb-0">Focus on constructability and real-world application.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <strong>✓</strong>
                    </div>
                    <div>
                      <h6>Software and IoT solutions that reduce rework</h6>
                      <p className="text-muted mb-0">Digital tools for efficiency and transparency.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="d-flex align-items-start">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px', minWidth: '40px' }}>
                      <strong>✓</strong>
                    </div>
                    <div>
                      <h6>Clear communication and risk management</h6>
                      <p className="text-muted mb-0">Proactive approach to project success.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
