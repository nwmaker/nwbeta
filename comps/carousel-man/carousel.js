import React from 'react';
import CarouselItem from './carouselItem';
import CarouselMarker from './marker';
import CarouselPage from './pageIndicator';

export default class Carousel extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      images: props.images,
      isTransitioning: false,
      previousItem: null,
      currentItem: 0,
    };
    
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickGoTo = this.handleClickGoTo.bind(this);
  }
  
  componentDidMount() {
  }
  
  setNextItem(next) {
    this.setState(state => ({
      isTransitioning: true,
      currentItem: next,
      previousItem: state.currentItem,
    }));
  }
    
  handleClickPrev(e) {
    e.preventDefault();

    let next = this.state.currentItem - 1;
    if (next < 0)  next = this.props.images.length - 1;
    
    this.setNextItem(next);
  }
  
  handleClickNext(e) {
    e.preventDefault();

    let next = this.state.currentItem + 1;
    if (next === this.props.images.length)  next = 0;
    
    this.setNextItem(next);
  }

  handleClickGoTo(e) {
    e.preventDefault();
    const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    if (index === this.state.currentItem) return;

    this.setNextItem(index);
  }
  
  shouldLoad(index) {
    const current = this.state.currentItem;
    return (index >= (current - 1) && index <= (current +1));
  }

  renderNavigation() {
    return (
      <div>
        <div className="carousel-navigation">
          <button onClick={this.handleClickPrev}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
          <button onClick={this.handleClickNext}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
        </div>

        {
          this.props.markers
          ? <CarouselMarkers images={this.state.images} current={this.state.currentItem} onClick={this.handleClickGoTo} />
          :
        <CarouselPage images={this.state.images} current={this.state.currentItem} />
        }
        <style jsx>{`
         
           
usel {
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  position: relative;
  transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1);
}

.carousel-item {
  flex: 1 0 100%;
  order: 2;
  position: relative;
  min-height: 400px;
}

@media (max-width: 600px) {
  .carousel-item {
    min-height: 300px;
  }
}

@media (max-width: 300px) {
  .carousel-item {
    min-height: 200px;
  }
}

.carousel-item--previous {
  order: 1;
}

.carousel-item-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
}

.carousel-navigation button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  background-color: #FFF;
  border: 0;
  border-radius:  0 5px 5px 0;
  color: #00B0FF;
  cursor: pointer;
  height: 55px;
  width: 30px;
}

.carousel-navigation button:last-child {
  right: 0;
  border-radius: 5px 0 0 5px;
}

.carousel-markers,
.carousel-page {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-markers button,
.carousel-markers i {
  display: inline-block;
  border: 0;
  padding: 0;
  background: white;
  width: 10px;
  height: 10px;
  margin: 0 2px;
  border-radius: 100%;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.5);
  cursor: pointer;
}

.carousel-markers i {
  cursor: default;
  background: #00B0FF;
}

.carousel-page {
  background-color: #FFF;
  border-radius: 3px;
  padding: 5px 15px;
  
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: #0056A9;
  font-size: 12px;
}

        `}</style>
      </div>
    );
  }

  render() {

    const trackerStyles = {
      transform: `translateX(-${this.state.currentItem * 100}%)`,
    };

    return (
      <section>

        <div className="carousel">
          <div className="carousel-track" style={trackerStyles} ref="track">
            {this.state.images.map((src, i) => <CarouselItem key={i} src={src} load={this.shouldLoad(i)} />)}
          </div>
          
          {this.state.images.length > 1 && this.renderNavigation()}
        </div>

      </section>
    );

  }
}
