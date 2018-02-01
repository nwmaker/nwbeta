import Link from './Link'

export default () => ( 
  <nav>
    <style jsx>{`
      .active:after {
        content: ' (current page)';
      }
      .nav-link {
        text-decoration: none;
        padding: 10px;
        display: block;
      }
    `}</style>
    <ul>
      <li>
        <Link activeClassName='active' href='/'>
          <a className='nav-link home-link'>Home</a>
        </Link> {' | '}
      </li>
      <li>
        <Link activeClassName='active' href='/products'>
          <a className='nav-link'>Products</a>
        </Link> {' | '}
      </li>
      <li>
        <Link activeClassName='active' href='/blog'>
          <a className='nav-link'>Blog</a>
        </Link> {' | '}
      </li>
      <li>
        <Link activeClassName='active' href='/club'>
          <a className='nav-link'>Club</a>
        </Link>
      </li>
    </ul>
  </nav>
)
