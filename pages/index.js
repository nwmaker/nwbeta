import Layout from '../comps/layout'
import User from '../comps/user'
import Clock from '../comps/clock'
import Timer from '../comps/timer'
//import Cat from '../svgs/cat.svg'
//import SlideShow from '../comps/slideshow'
//import Slide from '../comps/slide'
import Counter from '../comps/counter'

import Slideshow from '../comps/slideshow'
import Imageslide from '../comps/imageslide'
import Hello from '../comps/hello'

import Carousel from '../comps/carousel-man/carousel'
import AutoCarousel from '../comps/carousel-auto'

const pics = [
  'https://cdn.pixabay.com/photo/2017/06/19/07/12/water-lily-2418339__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg',
  'https://cdn.pixabay.com/photo/2017/07/14/17/44/frog-2504507__480.jpg',
  'https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951__480.jpg',
];

const images = [
  "https://images.unsplash.com/photo-1484256017452-47f3e80eae7c?ixlib=rb-0.3.5&s=f1af676eceb49746407f0f418349b962&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-0.3.5&s=0ca09cf5f08182a9b6f57ddeec3496a2&auto=format&fit=crop&w=809&q=80",
  "https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-0.3.5&s=11f983c05692c1f90c13b2e8e34793ac&auto=format&fit=crop&w=752&q=80",
];


export default () => (
  <Layout>
    <Counter />
    <AutoCarousel />
    <Carousel images={images} />
    <Hello />
    <style jsx>{`
      body {
  font-family: 'Noto Sans', sans-serif;
  width: 60%;
  margin: 0 auto;
}

.Carousel {
  height: 22rem;
  overflow: hidden;
}

.Carousel-TitleDesc {
  height: 20rem;
  color: rgba(255, 255, 255, 0.9);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  position: relative;
  z-index: 1;
  top: -21.3rem;
  margin-bottom: -20rem;
}
.Carousel-TitleDesc h2, .Carousel-TitleDesc p {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.4rem 0.8rem;
  border-radius: 0 0.3rem 0 0;
}
.Carousel-TitleDesc h2 {
  margin-bottom: -1rem;
}
.Carousel-TitleDesc p {
  padding-bottom: 1rem;
}

.Carousel-selector {
  cursor: pointer;
  display: inline-block;
  margin: 0.5em;
  width: 1em;
  height: 1em;
  background-color: rgba(0, 0, 0, 0.6);
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.Carousel-Selector-Selected {
  background-color: rgba(0, 0, 0, 0.3);
}

.Carousel-Slide {
  -webkit-box-flex: 0;
      -ms-flex: 0;
          flex: 0;
  -webkit-transition: all 1s;
  transition: all 1s;
}
.Carousel-Slide img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.Carousel-Slide-Selected {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.Carousel-Items {
  height: 20rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

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
    <Slideshow pics={images} />
    <p>Hello home</p>
    <User />
    <Clock />
    <Timer start={Date.now()} />
  </Layout>
)

