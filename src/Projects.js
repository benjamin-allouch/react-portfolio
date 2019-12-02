import React, { Component } from 'react';
import Project from './Project.js';
import { Col, Container } from 'react-bootstrap';

class Projects extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      projects_data: [
        {
          title: "WordPress Project (2019)",
          description: "My first web project was to integrate a WordPress theme for an imaginary client which is a luxury real estate agency in Aspen, Colorado. I had some requirements to follow : choose the right theme for the project, separate the chalets for sale and the chalets for rent, and a contact page with a functionnal form. As I've already two WordPress blogs, this project wasn't something unknown for me.",
          image: {
            url: "assets/chalets.jpg",
            alt: "Chalets & Caviar Benjamin Allouch",
          },
          projecturl: "http://dev-chalets-and-caviar-us-aspen.pantheonsite.io",
          projecttext: "Take a look",
          sourceurl: "https://github.com/benjamin-allouch/wordpressproject.github.io",
          sourcetext: "Source Code",
        },
        {
          title: "Build a static website from scratch (2019)",
          description: "No WordPress allowed for this project! I had to build everything from scratch with a text editor. It was a great opportunity to use for the first time real HTML, CSS and especially Bootstrap. It wouldn't be too much to say that I fell in love with Bootstrap. Its use is so clear for a total beginner in coding and the results are great with just a few lines of code.",
          image: {
            url: "assets/brooklyn.png",
            alt: "Brooklyn Outdoor Film Festival Benjamin Allouch",
          },
          projecturl: "https://benjamin-allouch.github.io/brooklyn-festival.github.io",
          projecttext: "Take a look",
          sourceurl: "https://github.com/benjamin-allouch/brooklyn-festival.github.io",
          sourcetext: "Source Code",
        },
        {
          title: "Build a portfolio using React (2019)",
          description: "The website you're visiting right now! First, I used basic HTML, CSS and Bootstrap to write the code. Then I used React by dividing my code into child and parent components and by using React-Bootstrap.",
          image: {
            url: "assets/react.jpg",
            alt: "Benjamin Allouch Portfolio",
          },
          projecturl: "#",
          projecttext: "Take a look",
          sourceurl: "#",
          sourcetext: "Source Code",
        }
      ]
    }
  }
    
  renderProjects() {
    let projects = this.state.projects_data.map((project, index) => { 
      return <Project project={project} key={index}/>
    })
    return projects
  }
  render() {
    
    const titleStyle = {
      fontSize: "50px",
      marginBottom: "15px",
      textAlign: "center",
    };

    return (
      <div>
        <Container>
          <Col>
            <h2 style={titleStyle}>My Work</h2>
          </Col>
        </Container>
        {this.renderProjects()}
      </div>
    )
  }
}

export default Projects;
