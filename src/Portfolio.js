import React from 'react'
import {Grid, Button, Label, Segment} from 'semantic-ui-react'
import packit from './packit.png'
import dollarducky from './dollarducky.png'
import solemates from './solemates.png'

class Portfolio extends React.Component {
  render() {
    return (
      <div id="projects">
      <div className="background-two">
      <Grid stackable centered columns={3} verticalAlign="middle">
      <Grid.Row className="navBar">
      <h1 className="padding-around">Projects</h1>
      </Grid.Row>
      <Grid.Row>
      <Grid.Column centered width={5} textAlign="center">
        <h2 className="padding-around-2">Pack It</h2>
        <img src={packit} className="row-sizing"/>
        <h4 />
        <a href="https://github.com/sam-fortuna/packIt" target="_blank"><Button>Code</Button></a>   <a href="https://www.youtube.com/watch?v=J0_UwdTnovQ&feature=youtu.be" target="_blank"><Button color="blue">Demo</Button></a>
        <h3 />
        <h3 className="font">A packing assistant that designs an optimized packing list based on the weather and duration of stay.</h3>
        <h3 />
        <h3 />
      </Grid.Column>
      <Grid.Column centered width={5} textAlign="center">
        <h2 className="padding-around-2">Solemates</h2>
        <img src={solemates} className="row-sizing"/>
                        <h4 />
        <a href="https://github.com/1807-GraceShopper/solemates" target="_blank"><Button>Code</Button></a>
        <h3 />
                <h3 className="font">An e-commerce store for shoes - a user can log in, add items to their cart, check out as that user or as a guest.</h3>
                <h3 />
                <h3 />
                <h3 />
        </Grid.Column>
      <Grid.Column centered width={5} textAlign="center">
        <h2 className="padding-around-2">Dollar Ducky</h2>
        <img src={dollarducky} className="row-sizing"/>
                <h4 />
        <a href="https://github.com/DollarDuck/Ducky" target="_blank"><Button>Code</Button></a>   <a href={`https://www.youtube.com/watch?v=Ma-AQIONsF4&amp;t=0s&amp;index=11`} target="_blank"><Button color="blue">Demo</Button></a>
        <h3 className="font">A personal finance app targeted towards young professionals to help budget, manage bills, track spending, and plan for large purchases and life decisions</h3>
      </Grid.Column>
      </Grid.Row>
      </Grid>
      <h1 />
      <h1 />
      </div>
      </div>
    );
  }
}

export default Portfolio;