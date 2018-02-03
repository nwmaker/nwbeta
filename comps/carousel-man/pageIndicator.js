export default ({images, current}) => (
  <div className='carousel-page'>
    {current+1} / <b>{images.length}</b>
  </div>
)
