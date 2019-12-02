import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Contactform.css';

function Contactform(props) {  
    return(
        <Container className="contactform">
          <Row>
            <Col lg={8}>
              <h1>{props.contactform.title}</h1>
                <p>{props.contactform.description}{props.contactform.mailto}</p>
                <p>
                  <Button variant="outline-info" size="lg" href={props.contactform.email.url} rel="noopener noreferrer" className="buttonmailright">{props.contactform.email.text}</Button>
                  <Button variant="outline-info" size="lg" href={props.contactform.linkedin.url} target="_blank" rel="noopener noreferrer">{props.contactform.linkedin.text}</Button>
                </p>
            </Col>
          </Row>
        </Container>
    )
  }

export default Contactform;
