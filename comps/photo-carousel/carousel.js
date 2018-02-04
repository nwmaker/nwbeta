import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    const indexStart = 0;
    this.state = {
      index: indexStart,
      next: this.getNextIndex(indexStart),
      move: false,
    };
  }

  getNextIndex(current) {
    if (current >= this.props.pics.length - 1) {
      return 0;
    }
    return current + 1;
  }

  setIndex(current) {
    this.setState({
      index: current,
      next: this.getNextIndex(current)
    });
  } 
  
  componentDidMount() {
    this.timerID = setInterval(
      () => {
        // on
        this.setState({move: true});
        // off
        setTimeout(() => {
          this.setState({move: false});
          this.setIndex(this.getNextIndex(this.state.index));
        }, 500); // same delay as in the css transition
    }, 2000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  render() {
    const move = this.state.move ? 'move' : '';
    if (this.state.move) {
      
    }
    return (
      <div className="mask">
        <div className="pic-wrapper">
          <div className={`current pic ${move}`}>
            {this.state.index}
            <img src={this.props.pics[this.state.index]} alt="" />
          </div>
          <div className={`next pic ${move}`}>
            {this.state.next}
            <img src={this.props.pics[this.state.next]} alt="" />
          </div>
        </div>
        <style jsx>{`
          .pic {
            display: inline-block;
            width: 100px;
            height: 100px;
            position: absolute;
          }
          .pic img {
            width: 100px;
            height: 100px;
          }
          .current {
            left: 100px;
          }
          .current .move {
            left: 0;
            transition: all .5s ease;
          }
          .next {
            left: 200px;
          }
          .next .move {
            left: 100px;
            transition: all .5s ease;
          }
          .pic-wrapper {
            background: lightgray;
            left: -100px;
            position: absolute;
          }
          .mask {
            left: 50px;
            overflow: hidden;
            width: 100px;
            height: 120px;
            position: absolute;
          }
        `}</style>
      </div>
    );
  }
}

export default Carousel;

