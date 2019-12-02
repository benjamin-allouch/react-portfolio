import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Greetings.css';

function Greetings(props) {
  return (    
    <Jumbotron className="bg-white">
      <Container>
        <Row>
          <Col lg={9}>
            <h1 className="display-4">{props.hello}</h1>
              <p className="lead">{props.intro}</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}     
    
export default Greetings;
