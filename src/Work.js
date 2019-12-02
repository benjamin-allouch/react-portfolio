import React from 'react';
import { Col, Container, Jumbotron, ListGroup, Row } from 'react-bootstrap';
import './Work.css';

function Work(props) {   
    return (
      <Jumbotron className="bg-white jumbowork">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="display-4 title">{props.work_data.title}</h1>
                <p className="tithis.tle">{props.work_data.titleexperience}
                  <ListGroup className="lead">
                    {props.work_data.workexperience.map((item, index) => {
                      return <ListGroup.Item>{item}</ListGroup.Item>
                    })}                      
                  </ListGroup>
                </p>
                   
                    <p>{props.work_data.personalexperience}</p>
                    <p><span className="underline">{props.work_data.start.visa}</span>{props.work_data.personal.visadescription}</p>
                    <p className="blockchain"><span className="underline">{props.work_data.start.blockchain}</span>{props.work_data.personal.blockchaindescription}</p>
                  
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    )
  }     
  
export default Work;
