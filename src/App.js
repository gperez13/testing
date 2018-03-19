import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";
import './App.css';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Header from './Header/Header.js';
import Origin from './Origin/Origin.js'
import Projects from './Projects/Projects.js';
import Skills from './Skills/Skills.js';
import State from './State/State.js';

class App extends Component {
  render() {


  const firstChild = props => {

    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;

  };


    return (



      <div>
        <Router>
          <div>






        <section id="home" style={{"margin-bottom": "50px"}}>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                
                <h1>Giovanni Perez</h1>
                <br/>
                <h3>Web Developer | Blockchain Enthusiast (No ICOs)</h3>
                <hr/>
                <div className="linkHover">
                  <Link to="/about"><p class="smoothScroll btn btn-default">About</p></Link>
                  <Link to="/origin"><p class="smoothScroll btn btn-default">Origin</p></Link>
                  <Link to="/projects"><p class="smoothScroll btn btn-default">Projects</p></Link>
                  <Link to="/Skills"><p class="smoothScroll btn btn-default">Skills</p></Link>
                  <Link to="/State"><p class="smoothScroll btn btn-default">State</p></Link>
                </div>

              </div>
            </div>
          </div>    
        </section>












        

          




             <Route path="/home"  component={Header}/>

        <Route

            exact
            path="/about"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <About {...rest} />}
            </TransitionGroup>
        )}/>

        <Route

            exact
            path="/origin"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Origin {...rest} />}
            </TransitionGroup>
        )}/> 


        <Route

            exact
            path="/projects"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Projects {...rest} />}
            </TransitionGroup>
        )}/>        

        <Route

            exact
            path="/skills"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <Skills {...rest} />}
            </TransitionGroup>
        )}/>

        <Route

            exact
            path="/state"
            children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
                {match && <State {...rest} />}
            </TransitionGroup>
        )}/>


          </div>
        </Router>




     


      </div>















    );
  }
}

export default App;
