import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import github from './github-logo.png'
import linkedin from './linkedin.png'
import medium from './medium.png'
import resume from './resume2.png'
import email from './email.png'

class App extends Component {
  render() {
    return (
      <div id="connect">
        <Grid stackable centered width={10}>
        <Grid.Row className="navBar">
        <h1 className="padding-around">Let's connect with each other</h1>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column centered width={2} textAlign="center">
        <a href="https://github.com/sam-fortuna" target="_blank">
        <img src={github} className="sizing" />
        </a>
        <h2 className="padding-left">Github</h2>
        </Grid.Column>
        <Grid.Column centered width={2} textAlign="center">
        <a href="https://www.linkedin.com/in/samantha-fortuna/" target="_blank">
        <img src={linkedin} className="sizing" />
        </a>
        <h2 className="padding-left">LinkedIn</h2>
        </Grid.Column>
        <Grid.Column centered width={2} textAlign="center">
        <a href="https://medium.com/@saf1119" target="_blank">
        <img src={medium} className="sizing" />
        </a>
        <h2 className="padding-left">Medium</h2>
        </Grid.Column>        
        <Grid.Column centered width={2} textAlign="center">
        <a target="_blank" href="https://drive.google.com/file/d/13y60hwl_LVCPg5pK2WBS4NGLGJ_jZEad/view?usp=sharing">
        <img src={resume} className="sizing-resume" />
        </a>
        <h2 className="padding-left">Resume</h2>
        </Grid.Column>
         <Grid.Column centered width={2} textAlign="center">
         <a href="mailto:saf1119@gmail.com">
        <img src={email} className="sizing-email" />
        </a>
        <div className="padding-email">Email</div>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
