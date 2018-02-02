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
    <style jsx>{`
      .slide-container
        display: block;
      }
      img {
        -webkit-transition: -webkit-transform 0.4s; /* Safari */
        transition: transform 0.4s;
      }
      img:hover {
        -webkit-transform: scale(1.02); /* Safari */
        transform: scale(1.02);
      }
      .pic {
        display: inline-block;
        width: 100px;
        height: 100px;
        position: absolute;
      }
      .pic {
        width: 100px;
        height: 100px;
      }

      .current {
        left: 100px;
      }

      .current.move {
        left: 0;
        transition: all .5s ease;
      }

      .next {
        left: 200px;
      }

      .next.move {
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
    <Imageslide pics={images} />
    <p>Hello home</p>
    <User />
    <Clock />
    <Timer start={Date.now()} />
  </Layout>
)

