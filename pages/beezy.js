import React from 'react'
import { Column, Row } from 'simple-flexbox'
import Layout from '../comps/layout'

export default () => (
  <Layout>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Beezy</h1>
        </Row>
        <p>Beezy flashes its LEDs all the time because it's busy. </p>
        <p>It pauses to display a random pattern when its antennae touch.</p>
        <p>Curious about its clocking and randomness? Check it out below.</p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/beezy'>
            <img alt='github-logo'
              src='/static/github32px.png'/>
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/beezy/'>
            <img className='product-image' 
              src='../static/beezy/beezy1a.png' alt='' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/beezy/'>
            <img className='product-image' 
              src='../static/beezy/beezy1b.png' alt='' />
          </a>
        </Row>
      </Column>
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
