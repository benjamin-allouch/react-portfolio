import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Greetings from './Greetings';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             presentation: "Hello everybody! I'm Benjamin, upcoming web developer.",
             cities: "Currently living between Paris and Podgorica (Montenegro). Legal counsel for 5 years, mostly about IT and Data Protection Law, including GDPR (General Data Protection Law), I want a career change to become a developer and that's why I chose the Openclassrooms' full-stack developer path."
        }
    }
    
    render() {
        return (
            <Container>
                <Greetings 
                hello={this.state.presentation}
                intro={this.state.cities}
                />
            </Container>
        )
     }           
  }
    
export default Home;

