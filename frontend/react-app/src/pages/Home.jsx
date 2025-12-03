import React from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home({ department, onDepartmentChange }) {
  const services = [
    { id: 1, dept: 'civil', title: 'Civil Engineering', description: 'Structural design, site assessment, project supervision, and compliance services.' },
    { id: 2, dept: 'it', title: 'IT & Digital', description: 'BIM consulting, construction software integration, site IoT/sensor systems.' },
    { id: 3, dept: 'all', title: 'Integrated Solutions', description: 'We combine civil knowledge with IT capabilities to deliver smart solutions.' }
  ];

  const filteredServices = services.filter(s => department === 'all' || s.dept === 'all' || s.dept === department);

  return (
    <div style={{ minHeight: '100vh' }}>
      <section className="bg-light py-5">
        <Container fluid>
          <Row className="text-center">
            <Col>
              <h1 className="display-4">Practical Engineering & Innovative IT Solutions</h1>
              <div className="text-center mb-5">
            <ButtonGroup>
              <Button 
                variant={department === 'all' ? 'primary' : 'outline-primary'}
                onClick={() => onDepartmentChange('all')}
              >
                All Services
              </Button>
              <Button 
                variant={department === 'civil' ? 'primary' : 'outline-primary'}
                onClick={() => onDepartmentChange('civil')}
              > 
                Civil Engineering
              </Button>
              <Button 
                variant={department === 'it' ? 'primary' : 'outline-primary'}
                onClick={() => onDepartmentChange('it')}
              >
                IT & Digital
              </Button>
            </ButtonGroup>
          </div>
              <p className="lead text-muted">We provide civil engineering consultancy and IT solutions tailored to construction and infrastructure projects.</p>
              <Button as={Link} to="/contact" size="lg" className="mt-3">Get a Consultation</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container fluid>
          <h2 className="text-center mb-4">Two departments, one mission</h2>
          <p className="text-center text-muted mb-5">Our Civil Department delivers design, inspection and project management. Our IT Department implements digital solutions for construction productivity.</p>

          

          <Row className="g-4">
            {filteredServices.map(service => (
              <Col md={4} key={service.id}>
                <Card className="h-100 shadow-sm border-top border-primary border-3">
                  <Card.Body>
                    <Card.Title className="text-primary">{service.title}</Card.Title>
                    <Card.Text className="text-muted">{service.description}</Card.Text>
                    <Link to="/services" className="btn btn-sm btn-outline-primary">Learn More →</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="bg-primary text-white py-5">
        <Container className="text-center">
          <h2>Ready to talk?</h2>
          <Button as={Link} to="/contact" variant="light" size="lg">Contact Us</Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;
