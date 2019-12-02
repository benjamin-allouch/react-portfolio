import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Welcomephoto.css';

function Welcomephoto(props) {  
    return (
        <Container>
          <Row className="image">
            <Col lg={{offset: 4, span: 8}}>
              <Image src={props.welcome.picurl} fluid alt="myself in Tunisia" />
            </Col>
          </Row>
        </Container>
    )
  }

export default Welcomephoto;
