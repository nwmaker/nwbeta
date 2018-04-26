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
            <a href='https://github.com/nwmaker/smd0201'>info</a>
          </td>
        </tr>
        <tr>
          <td>
            <Link href='/ursaminor'><a>Ursa Minor Bear</a></Link>
          </td>
          <td>
            <a href='https://github.com/nwmaker/ursaminor'>info</a>
          </td>
        </tr>
      </table>
      
      <h2><a href='https://www.tindie.com/stores/nwmaker/'>Buy them at Tindie</a></h2>
    </div>
  </Layout>
)
