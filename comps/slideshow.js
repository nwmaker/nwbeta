import React, { Component } from 'react'

class Slideshow extends Component {
  constructor(props) {
    super(props);
    const indexStart = 0;
    this.state = {
      index: indexStart,
      next: this.getNextIndex(indexStart),
      move: false,
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
      index: index,
      next: this.getNextIndex(index)
    });
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => {
        // on
        this.setState({
          move: true
        });
        // off
        setTimeout(() => {
          this.setState({
            move: false
          });
            
          this.setIndex(
            this.getNextIndex(
              this.state.index
            )
          );
        }, 500);
      }, 2000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  render() {
    const move = this.state.move ? 'move' : '';
    console.log(move);

    return (
      <div className='mask'>
        <div className='pic-wrapper'>
          <div className={`current pic ${move}`}>
            {this.state.index}
            <img src={this.props.pics[
              this.state.index
            ]} alt="" />
          </div>
          <div className={`next pic ${move}`}>
            {this.state.next}
            <img src={this.props.pics[
              this.state.next
            ]} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
