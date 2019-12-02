import React from 'react';
import { Button, Col, Container, Image, Jumbotron, Row } from 'react-bootstrap';
import './Profile.css';

function Profile(props) {  
    return(
      <Jumbotron className="bg-white profile">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="display-6 profiletitle">{props.profile_data.title}</h1>
                {props.profile_data.description.map((item, index) => {
                  return <p className="lead">{item}</p>
                })}                
            </Col>
          </Row>
          <Row>
            <Col lg={{offset: 2, span: 8}}>
              <Image src={props.profile_data.image.url} fluid alt={props.profile_data.image.text} />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <hr />
                <p>{props.profile_data.professionallinks}</p>
                <Button variant="outline-success" size="sm" href={props.profile_data.linkedin.url} target="_blank" rel="noopener noreferrer">{props.profile_data.linkedin.text}</Button>
                <Button variant="outline-success" size="sm" href={props.profile_data.github.url} target="_blank" rel="noopener noreferrer">{props.profile_data.github.text}</Button>

                <p class="personallinks">{props.profile_data.personallinks}</p>
                <Button variant="outline-success" size="sm" href={props.profile_data.blockchain.url} target="_blank" rel="noopener noreferrer">{props.profile_data.blockchain.text}</Button>
                <Button variant="outline-success" size="sm" href={props.profile_data.visa.url} target="_blank" rel="noopener noreferrer">{props.profile_data.visa.text}</Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      )
    }

export default Profile;
