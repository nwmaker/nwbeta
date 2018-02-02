import React, { Component } from 'react'

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Carousel: {this.props.current}</p>
      </div>
    );
  }
}

export default Carousel;
