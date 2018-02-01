import Link from 'next/link'
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
        <Link href='/'><a>Home</a></Link> {' | '}
        <Link href='/products'><a>Products</a></Link> {' | '}
        <Link href='/blog'><a>Blog</a></Link> {' | '}
        <Link href='/club'><a>Club</a></Link>
      </nav>
    </header>

    { children }

    <footer>
      {'NWMaker Ltd. 2018'}
    </footer>
  </div>
)
