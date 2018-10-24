import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Grid} from 'semantic-ui-react'
import AboutMe from './AboutMe'
import Connect from './Connect'

class App extends Component {
  render() {
    return (
      <div>
      <div className="background">
      <h3 />              <br />
        <br />
        <br />
        <Grid verticalAlign='middle' columns={1} centered>
        <Grid.Row>
        <Grid.Column verticalAlign='middle' centered>
        <h1 className="header">Hi, I'm Sam</h1>
        <br />
        <a href="#aboutme"><Button size="huge">Let's get to know each other</Button></a>
        <br />
        <br />
        <a href="#projects"><Button size="large">Projects</Button></a><div className="divider" /><a href="#connect"><Button size="large" float="right">Contact</Button></a>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        <AboutMe />
        </div>
        <Connect />
      </div>
    );
  }
}

export default App;
