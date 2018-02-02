import React, { Component } from 'react'
import Carousel from './carousel'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: '0'};
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
    let current = parseInt(this.state.count, 10);
    let next = (current + 1) % 3;

    this.setState({
      count: String(next)
    });
  }

  render() {
    return (
      <Carousel current={this.state.count} />
    );
  }
}

export default Counter;
