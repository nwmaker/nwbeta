import Layout from '../comps/layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <div>
      <h1>NWMaker Porduct List</h1>
      <table>
        <tr>
          <td>
            <Link href='/smd0201'><a>SMD 0201 Challenge</a></Link>
          </td>
          <td>
            <a href='https://www.tindie.com/products/nwmaker/smd-0201-soldering-challenge/'>SMD-Challenge at Tindie</a>
          </td>
        </tr>
        <tr>
          <td>
            <Link href='/ursaminor'><a>Ursa Minor Bear</a></Link>
          </td>
          <td>
            <a href='https://www.tindie.com/products/nwmaker/ursaminor-soldering-kit/'>UrsaMinor-Kit at Tindie</a>
          </td>
        </tr>
      </table>
    </div>
  </Layout>
)
