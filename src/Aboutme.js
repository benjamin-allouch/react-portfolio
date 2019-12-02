import React from 'react';
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import './Aboutme.css';

function Aboutme(props) {  
    return(
      <Jumbotron className="bg-white">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="display-4">{props.aboutme_data.title}</h1>
              {props.aboutme_data.description.map((item, index) => {
                return <p className="lead">{item}</p>
              })}                  
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
   }      
  
export default Aboutme;
