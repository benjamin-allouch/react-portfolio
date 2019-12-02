import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {  
    return (
      <React.Fragment>
        <Nav />
         <Router>          
             <Switch>  
               <Route exact path ="/" component={Home} />
               <Route path = "/projects" component={Projects} />
               <Route path="/about" component={About} />
               <Route path="/contact" component={Contact} />
               <Route component={Error} />
             </Switch>          
         </Router>
         <Footer />
       </React.Fragment>
    );
  } 

export default App;
