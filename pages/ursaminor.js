import Layout from '../comps/layout'

export default () => (
  <Layout>
    <div className='product-container'>
      <h1 className='product-header'>Ursa Minor Bear</h1>
      <img className='product-image' src='../static/ursaminor/ursaminor_1on1none_800x360.png' alt='' />
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
