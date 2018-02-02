import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {elapsed: 0};
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
    this.setState({
      elapsed: new Date() - this.props.start
    });
  }

  render() {
    return (
      <div>
        <p>This timer was started {Math.round(this.state.elapsed/1000)} seconds ago.</p>
      </div>
    );
  }
}

export default Timer;
