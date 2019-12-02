import React, { Component } from 'react';
import Welcomephoto from './Welcomephoto.js';
import Contactform from './Contactform.js';

class Contact extends Component {  
  constructor(props) {
    super(props)
  
    this.state = {
       welcome_data : {
        picurl: "assets/myself1.jpg",
      },
      contactform_data : {
        title: "Don't hesitate to contact me!",
        description: "You can reach me out for job opportunity, ask for more information, give me some advice to improve the portfolio and just to make acquaintance! Here is my personal email: ",
        mailto: "benjamin.allouch@gmail.com",
        email: {
           url: "mailto:benjamin.allouch@gmail.com",
           text: "Send me an email!",
           },
        linkedin: {
           url: "https://www.linkedin.com/in/benjamin-allouch1420",
           text: "LinkedIn Profile",
           },
      }
    }
  } 
   
   render () {
     return (
       <div>
             <Welcomephoto welcome = {this.state.welcome_data} />
             <Contactform contactform = {this.state.contactform_data} />
       </div>
     )
   }
}

export default Contact;
