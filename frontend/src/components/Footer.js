import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col classname="py-3" style={{ textAlign: 'center' }}>
            Copyright &copy; AndrewEssentials
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
