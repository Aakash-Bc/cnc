import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Blog({ department }) {
  const posts = [
    { id: 1, dept: 'all', title: 'Bringing BIM to Site: Practical Steps', date: 'Nov 1, 2025', excerpt: 'BIM is not just for designers — this post outlines simple steps to use BIM models on site for clash checks and progress monitoring.' },
    { id: 2, dept: 'all', title: '3 Ways IoT Improves Construction Safety', date: 'Oct 10, 2025', excerpt: 'From worker tracking to structural health monitoring, IoT provides data to make safer decisions during construction.' }
  ];

  return (
    <Container fluid className="py-5" style={{ minHeight: '100vh' }}>
      <h1 className="mb-4 text-center">Insights & Articles</h1>
      <p className="text-center text-muted mb-5">Articles and updates about civil engineering, BIM, construction tech, and project case studies.</p>

      <Row className="g-4">
        {posts.map(post => (
          (department === 'all' || post.dept === 'all') && (
            <Col md={6} key={post.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <p className="text-muted small">{post.date}</p>
                  <Card.Text>{post.excerpt}</Card.Text>
                  <a href="#read-more" className="btn btn-sm btn-outline-primary">Read more →</a>
                </Card.Body>
              </Card>
            </Col>
          )
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
