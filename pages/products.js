import Layout from '../comps/layout'
import Link from 'next/link'

//import Show from '../comps/photo-carousel/show'
//import Slideshow from '../comps/slideshow'

export default () => (
  <Layout>
    <div>
      <h1>NWMaker Porduct List</h1>
      <ul>
        <Link href='/smd0201'><a>SMD 0201 Challenge</a></Link> {' '}
        <Link href='/ursaminor'><a>Ursa Minor Bear</a></Link>
      </ul>
    </div>
  </Layout>
)
