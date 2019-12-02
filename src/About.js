import React, { Component } from 'react';
import Profile from './Profile.js';
import Work from './Work.js';
import Aboutme from './Aboutme.js';

class About extends Component {  
  constructor(props) {
    super(props)
  
    this.state = { 
      profile_data : {
      title: "My Profile",
      description: [ "My name is Benjamin, 33, currently living between Paris and Podgorica (Montenegro). ","I've studied law, in France and, as en Erasmus student, in Sweden. I've graduated in 2013 with a Master in Data Protection and Intellectual Property Law. ","I've worked for 5 years, mostly about IT and Data Protection Law. These areas of law are getting more and more important today and probably the most important tomorrow. ","For professionnal and personal reasons, I want a career change. New technologies, digital transition and computer in general have always been an interest for me and that's why I chose to learn web development. ","As I am interested about blockchain technology too, I'd rather to work in this area, preferably as a freelance. My ultimate objective would be trying to mix my current legal skills with my future programming skills in a way I don't know yet. ","As I'm interested in many subjects, I could also be a freelance web editor with some programming skills. ","If you are familiar with French language, you can take a look at my two blogs. ","For the meantime, my programming skills include front-end development: HTML, CSS, Bootstrap, some JavaScript and React. ","In case you're interested, my legal skills include GDPR and Data Protection Law (strong skills), IT and Contract Law. ","Feel free to contact me for more information, work project or future collaboration! ","Benjamin"],
      image: {
        url: "assets/profilepic.jpg",
        text: "Photo of myself",
      },
      professionallinks: "Here are some useful professional links",
      linkedin: {
        url: "https://www.linkedin.com/in/benjamin-allouch-7ab198b5",
        text: "LinkedIn",
      },
      github: {
        url: "https://github.com/benjamin-allouch",
        text: "GitHub",
      },
      personallinks: "You can also take a look at my personal blogs about blockchain/cryptocurrencies and travelling. Both are in French",
      blockchain: {
        url: "https://bitcoin-blockchain.fr",
        text: "Blockchain"
      },
      visa: {
        url: "https://visasansdetour.com",
        text: "Travel",
      },      
    },
    work_data : {
      title: "Work experience",
      titleexperience: "All my work experience is within a legal department.",
      workexperience: ["2018: Corporate Legal Counsel - Euris Health Cloud (Protected Health Data Hosting Service Provider), Paris"," 2015 - 2017: Legal Advisor - Cour de cassation (French Supreme Court), Paris"," 2013 - 2014: Corporate Legal Counsel - SNCF (French National Rail Company), Paris"," 2012 - 2013: Legal interships (SNCF, Technicolor)"],
      personalexperience: "I can add some personal projects which might interest you.",
      start: {
        visa: "Since March 2017: ",
        blockchain: "Since June 2017: ",
       },
      personal: {
        visadescription: "Travel blog called Visa Sans Détour (in French). You can find some articles about my trips and my view of travelling in general. Without any advertising and despite the strong competition, the blog has good audience (around 50 unique visitors per day).",
        blockchaindescription:  "Blockchain and cryptocurrencies blog called BitcoinBlockchain (in French) - this blog is more professional and I got some interviews with the French press. I'm really interested about this technology since a long time. I'm trying to explain by popularisation and with a legal point of view.",
       },
      },
      aboutme_data : {
        title: "A little bit about myself...",
        description: ["I'm a curious humain being, I have various hobbies an interests."," Firstly, travelling is like a second nature to me. I've visited more than 40 countries, mostly in Europe. I would like to travel more in Asia and America from now on."," I've studied history for 3 years and I found a real passion for Byzantine and Ottoman Empires. I read many books about others historical periods too."," I'm really sensitive to many antinomic subjects such as sustainable development, digital transition and geopolitical issues. That's why I can write about many subjects."," I love to learn new languages which aren't chosen random. I speak French (mother tongue), English (full professional proficiency), Indonesian (good level) and some Spanish (currently learning)."],
      }
  }
}
    render () {
      return (
        <div>
              <Profile profile_data = {this.state.profile_data}/>
              <Work work_data = {this.state.work_data}/>
              <Aboutme aboutme_data = {this.state.aboutme_data}/>
        </div>
      )
    }
  }

export default About;