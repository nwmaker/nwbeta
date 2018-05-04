import Layout from '../comps/layout'

export default () => (
  <Layout>
    <div className='product-container'>
      <h1 className='product-header'>Wearable Bear</h1>
      <h2><a href='https://github.com/nwmaker/wearable-bear'>A badge with a pin to wear and two buttons to play</a></h2>
      <a href='https://www.tindie.com/products/nwmaker/wearable-bear-badge/'>
        <img className='product-image' src='../static/beezy/beezy1a.png' alt='' />
      </a>
      <a href='https://www.tindie.com/products/nwmaker/beezy/'>
        <img className='product-image' src='../static/beezy/beezy1b.png' alt='' />
      </a>
      <style jsx>{`
        .product-container {
          width: 100%;
          text-align: center;
        }
        .product-header {
          text-align: center;
        }
        .product-image {
          width: 800px;
          height: 360px;
          position: relative;
          margin: 0 auto;
        }
      `}</style>
    </div>
  </Layout>
)
