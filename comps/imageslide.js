import React, { Component } from 'react'

class Imageslide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  getNextIndex(index) {
    if (index >= this.props.pics.length - 1) {
      return 0;
    }
    return index + 1;
  }

  setIndex(index) {
    this.setState({
      index: index
    });
  }
  
  next() {
    this.setIndex(this.getNextIndex(this.state.index));
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.next(), 5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  render() {
    return (
      <div className='slide-container'>
        {this.state.index}
        <img src={this.props.pics[this.state.index]} 
           alt="" style={{width: "100%"}} />
      </div>
    );
  }
}

export default Imageslide;
