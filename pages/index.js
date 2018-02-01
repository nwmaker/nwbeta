import Layout from '../comps/layout'
//import Nav from '../comps/Nav'

export default () => (
  <Layout>
    <p>Hello home</p>
  </Layout>
)

/*
import Link from 'next/link'
import Head from 'next/head'

import User from '../comps/user'

export default () => 
  <div>
    <Head>
      <title>NWMaker</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <h1 className="container">
      NWMaker
      <ul>
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>{" "}
        <li>
          <Link href="/products"><a>Products</a></Link>
        </li>{" "}
        <li>
          <Link href="/blog"><a>Blog</a></Link>
        </li>{" "}
        <li>
          <Link href="/club"><a>Club</a></Link>
        </li>
      </ul>
    </h1>
    <div className="hello">
      <p>Hello</p>
    </div>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }

      h1 {
        display: flex;
        flex-direction: row;
        color: #ff0102;
      }
      ul {
        text-align: right;
        display: flex;
        flex-direction: row;
        justify-content: flex-end space-between;
      }
      div {
        background: black;
        display: flex;
        flex-direction: row;
        text-decoration: none;
        text-transform: uppercase;
      }
      li {
        list-style: none;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
*/
