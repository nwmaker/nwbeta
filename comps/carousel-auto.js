import React from 'react';

class Carousel extends React.Component { 
  state = {
    sliderStep: 1
  };
  
  componentDidMount () {
    // init carousel
    this.init()
  }
  
  componentWillUnmount () {
    // remove interval function on unmount
    clearInterval(this.carouselTimer)
  }
  
  render () {
    let images = this.props.images
    
    let carouselImages = images.map((image, index) => {
      let isActive = this.state.sliderStep === index + 1
      return (
        <CarouselItem
          key={index}
          bg={image}
          isActive={isActive} />
      )
    })
    
    let stepIndicators = []
    for (let i = 1; i <= images.length; i++) {
      let stepClass = i === this.state.sliderStep
        ? 'step-indicator step-indicator--active'
        : 'step-indicator'
      
      stepIndicators.push(
        <div
          id={i}
          onClick={this.onIndicatorClick}
          className={stepClass} />
      )
    }
    
    return (
      <div className='carousel-container'>
        { carouselImages }
        
        <div className='step-indicator-container'>
          { stepIndicators }
        </div>
        <style jsx>{`
          .carousel-container {
            width: 100%;
            height: 100%;
            position: relative;
          }
          .step-indicator-container {
            position: absolute;
            z-index: 2;
            left: 50%;
            bottom: 5%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .step-indicator {
            width: 12px;
            height: 8px;
            border-radius: 8px;
            margin: 0 6px;
            background-color: rgba(0, 0, 0, 0.35);
            -webkit-transition: background-color 0.45s ease-in-out;
            transition: background-color 0.45s ease-in-out;
          }
          .step-indicator:hover {
            cursor: pointer;
          }
          .step-indicator--active {
            background-color: rgba(255, 255, 255, 0.75);
            -webkit-transition: background-color 0.85s ease-in;
            transition: background-color 0.85s ease-in;
          }
        `}</style>  
      </div>
    )
  }
  
  // Initializes Carousel
  init = () => {
    // set max number of slides based on props length
    let maxSteps = this.props.images.length
    // init interval function
    let interval = this.props.interval || 5000 // default time interval is 1000ms
    this.carouselTimer = setInterval(() => {
      let step = this.state.sliderStep
      if (step < maxSteps) {
        step += 1
      } else {
        step = 1
      }
       
      // update compent state
      this.setState({
        sliderStep: step
      })
 
    }, interval)
  };
  
  onIndicatorClick = (event) => {
    this.setState({
      sliderStep: parseInt(event.target.id, 10)
    })
    // clear interval then start a new one
    clearInterval(this.carouselTimer)
    this.init()
  };
}

/*
 * Carousel Item Component
 */ 
class CarouselItem extends React.Component {
  render () {
    let itemClass = this.props.isActive ? 'carousel-item carousel-item--active' : 'carousel-item'
    return (
      <div className={itemClass}
           style={{ backgroundImage: 'url(\'' + this.props.bg +'\')' }}>
        <style>{`
          .carousel-item {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            opacity: 0;
            -webkit-transition: opacity 1s ease-in-out;
            transition: opacity 1s ease-in-out;
          }
          .carousel-item--active {
            z-index: 1;
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}


/*
 * Root Application
 */
/*
const carouselImages = [
  'http://lorempixel.com/800/360/food/',
  'http://lorempixel.com/800/360/sports/',
  'http://lorempixel.com/800/360/city/',
  'http://lorempixel.com/800/360/nature/'
]
*/

const carouselImages = [
  '/static/monarch_2flying_b.png',
  '/static/binary_b2.png',
  '/static/smd_2_c.png',
  '/static/ursaminor_2.png',
  '/static/snowflake_whiteall.png'
]

class AutoCarousel extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <div className='app-header'>
          <h1>Electronics Crafts</h1>
          <p>Unique. Distinctive. Beautiful.</p>
        </div>
        <div className='app-content'>
          <Carousel images={carouselImages} />
        </div>
        <style jsx>{`
          .app-container {
            width: 100%;
            height: 100%;
            font-family: 'Roboto', 'sans-serif';
          }
          .app-header h1, .app-header p {
            text-align: center;
          }
          .app-header h1 {
            line-height: 18px;
          }
          .app-header p {
            color: #ff0102;
            line-height: 16px;
          }
          .app-content {
            width: 800px;
            height: 360px;
            position: relative;
            background-color: gray;
            margin: 0 auto;
          }
        `}</style>
      </div>
    )
  }
}

export default AutoCarousel;
