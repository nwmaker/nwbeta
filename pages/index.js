import Layout from '../comps/layout'
import User from '../comps/user'
import Clock from '../comps/clock'
import Timer from '../comps/timer'
//import Cat from '../svgs/cat.svg'

export default () => (
  <Layout>
    <div className='logo-container'>
      <marquee>SVG Logo!</marquee>
      <style jsx>{`
        .logo-container {
          width: 600px;
          margin: 100px auto;
        }
      `}</style>
    </div>
    <p>Hello home</p>
    <User />
    <Clock />
    <Timer start={Date.now()} />
  </Layout>
)

