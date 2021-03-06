import FadeCarousel from './fade-carousel.js'

const images = [
  'beezy2',
  'smd0201d_full',
  'monarch_2flying_b',
  'ursaminor_2',
  'bear3ok',
  'snowflake_whiteall',
]

const messages = [
  'Curiosity',
  'Challenge',
  'Experience',
  'Exploration',
  'Gift',
  'Moment',
]

export default () => (
  <div className='fading'>
    <div className='fade-header'>
      <h1>Electronics Crafts</h1>
      <h2>Unique. Distinctive. Beautiful.</h2>
    </div>
    <FadeCarousel images={images} messages={messages} />
    <style jsx global>{`
      .fading {
        width: 100%;
        height: 100%;
      }
      .fade-header h1, .fade-header p, .fade-header h2 {
        text-align: center;
      }
      .fade-header h1 {
        line-height: 18px;
      }
      .fade-header p {
        color: #ff0102;
        line-height: 26px;
      }
      .fade-header h2 {
        color: #ff0102;
        line-height: 20px;
      }
      .fade-carousel {
        width: 800px;
        height: 360px;
        background-color: gray;
        margin: 0 auto;
      }
      .fade-container {
        width: 100%;
        height: 100%;
        position: relative;
      }
      .fade-container .fade-slide {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }
      .fade-container .fade-slide-active {
        z-index: 1;
        opacity: 1;
      }
      .msg {
        position: absolute;
        color: #ffffff;
        font-size: 30px;
        bottom: 10px;
        left: 15px;
        font-family: 'Josefin Slab', serif;
        font-weight: 100;
      }
      .indicator-container {
        position: relative;
        text-align: center;
        z-index: 2;
        left: 50%;
        right: 50%;
        bottom: 5%;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
      }
      .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 0 6px;
        background-color: rgba(0, 0, 0, 0.75);
        transition: background-color 0.45s ease-in-out;
      }
      .indicator-active {
        background-color: rgba(255, 255, 255, 0.75);
        transition: background-color 0.85s ease-in;
      }
      .indicator-container .indicator:hover {
        cursor: pointer;
      } 
    `}</style>
  </div>
)
