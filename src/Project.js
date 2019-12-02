import React from 'react';
import { Button, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import './Project.css';

function Project(props) {  
    return(
      <Jumbotron className="bg-white jumbowork">
        <Container>
          <Row>
            <Col>
              <h1>{props.project.title}</h1>
                <Image src={props.project.image.url} fluid alt={props.project.image.alt} />
                  <p className="lead">{props.project.description}</p>
                  <hr />
                  <Button variant="outline-success" size="sm" href={props.project.projecturl} target="_blank" rel="noopener noreferrer">{props.project.projecttext}</Button>
                  <Button variant="outline-success" size="sm" href={props.project.sourceurl} target="_blank" rel="noopener noreferrer">{props.project.sourcetext}</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  }

export default Project;
