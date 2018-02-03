export default ({ images, current, onClick }) => (
  <div className="carousel-markers">
    {images.map((src, i) => 
      i === current ? 
        <i key={i}></i> : 
        <button data-index={i} key={i} onClick={onClick}></button>)}
    </div>
)
