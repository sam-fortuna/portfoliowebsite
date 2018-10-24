import React from 'react'
import {Grid, Image, Label} from 'semantic-ui-react'
import headshot from './headshot.jpg'
import Portfolio from './Portfolio'

class AboutMe extends React.Component {
  render() {
    return (
      <div className="huge-padding">
      	<Grid stackable centered verticalAlign="middle" id="aboutme">
      	<div className="new-background">
      	<Grid.Row stackable>
      	<Grid.Column width={2} centered textAlign="center">
      	 <Image src={headshot} floated="left" className='image-sizing'/>
      	 <h1 />
      	</Grid.Column>
        <Grid.Column centered width={4}>
            <div className="contentinfo">
        	<h1 className="padding-around">About Me</h1>
        	<p>I’m a physics and English major turned full stack software engineer through Fullstack Academy of Code. Now, I’m working as a teaching fellow at Fullstack, helping others achieve their goals, and seeking a full-time software engineering position to apply my skills and continue solving new and interesting problems.</p>
        	<p>In my free time I like reading, weight lifting, hiking, and trying to cook.</p>
        	</div>
        </Grid.Column>
        </Grid.Row>
        </div>
        </Grid>
        <Portfolio />
      </div>
    );
  }
}

export default AboutMe;
