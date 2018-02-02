import React, { Component } from 'react'
import Carousel from './carousel'

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let current = this.state.count;
    let next = (current+1) % 3;
    console.log(next);
    this.setState({
      count: next
    });
  }
 
  render() {
    return (
      <div>
        <p>counting {this.state.count}</p>
      </div>
    );
  }
}

export default Slide
