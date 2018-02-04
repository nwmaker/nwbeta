//import Link from 'next/link'
import Link from './Link'
import Head from 'next/head'

export default ({ children, title = 'NWMaker Ltd.' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <style jsx>{`
          .active:after {
            color: #f00102;
          }
          .active {
            color: #f01122;
            text-decoration: none;
          }
          .nav-link {
            text-decoration: none;
            padding: 10px;
            color: #888;
          }
        `}</style>
        <Link className='nav-link' activeClassName='active' href='/'>
          <a className='home-link'>Home</a></Link> {' | '}
        <Link activeClassName='active' href='/products'>
          <a>Products</a></Link> {' | '}
        <Link activeClassName='active' href='/blog'>
          <a>Blog</a></Link> {' | '}
        <Link activeClassName='active' href='/club'>
          <a>Club</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      <div className='footer'>
      {'NWMaker Ltd. 2018'}
      <style jsx>{`
        .footer {
          display: flex;
          align-item: center;
          justify-content: center;
          line-height: 16px;
          text-align: center;
        }
      `}</style>
      </div>
    </footer>
  </div>
)
