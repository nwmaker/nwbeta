import Link from './Link'
import Head from 'next/head'
import Logo from './logo'

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
          nav {
            background-color: #fff;
            overflow:hidden;
            height: 20px;
          }
          .active:after {
            color: #f00102;
          }
          .active {
            color: #f01122;
            text-decoration: none;
          }
          .nav-link {
            text-decoration: none;
            padding: 20px;
          }
          a {
            color: black;
          }
        `}</style>
        <Link className='nav-link' activeClassName='active' href='/'>
          <a className='home-link'>Home</a></Link> {' | '}
        <Link activeClassName='active' href='/products'>
          <a>Products</a></Link> {' | '}
        <Link activeClassName='active' href='/about'>
          <a>About</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      <div className='footer'>
        <div className='footer-container'>
          <div className='copyright'>
            {'Copyright NWMaker Ltd. 2018'}
          </div>
          <a href='http://nwmaker.com'><Logo /></a>
        </div>
      <style jsx>{`
        .footer {
          display: flex;
          align-item: center;
          justify-content: center;
          line-height: 30px;
          padding: 25px;
          font-size: 20px;
          text-align: center;
        }
        .footer-container {
          align-self: auto;
        }
      `}</style>
      </div>
    </footer>
  </div>
)
