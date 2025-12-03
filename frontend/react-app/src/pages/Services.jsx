import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Services({ department }) {
  const civilServices = [
    'Structural design & analysis',
    'Site surveys & geotechnical coordination',
    'Construction supervision & QA/QC',
    'Permitting & regulatory compliance',
    'Cost estimating and scheduling'
  ];

  const itServices = [
    'BIM strategy, implementation and training',
    'Construction management software integration',
    'Site IoT, sensors and real-time monitoring',
    'Custom dashboards, data analytics and reporting',
    'Mobile apps for site data capture'
  ];

  return (
    <Container fluid className="py-5" style={{ minHeight: '100vh' }}>
      <h1 className="mb-4 text-center">Services</h1>

      {(department === 'all' || department === 'civil') && (
        <Row 
          className="mb-5"
          style={{ margin: '0', width: '100%' }}
        >
          <Col 
            lg={12}
            style={{ padding: '0', width: '100%' }}
          >
            <h2 className="text-primary mb-3">Civil Engineering</h2>
            <ul className="list-unstyled" style={{ paddingLeft: '1rem' }}>
              {civilServices.map((service, idx) => (
                <li key={idx} className="mb-2">✓ {service}</li>
              ))}
            </ul>
            <p style={{ paddingLeft: '1rem' }}>
              We design with constructability in mind and support projects through to completion.
            </p>
          </Col>
        </Row>
      )}

      {(department === 'all' || department === 'it') && (
        <Row 
          className="bg-light p-4 rounded"
          style={{ margin: '0', width: '100%' }}
        >
          <Col 
            lg={12}
            style={{ padding: '0', width: '100%' }}
          >
            <h2 className="text-primary mb-3">IT & Digital Services</h2>
            <ul className="list-unstyled" style={{ paddingLeft: '1rem' }}>
              {itServices.map((service, idx) => (
                <li key={idx} className="mb-2">✓ {service}</li>
              ))}
            </ul>
            <p style={{ paddingLeft: '1rem' }}>
              We help teams adopt digital tools that reduce rework and improve transparency.
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Services;