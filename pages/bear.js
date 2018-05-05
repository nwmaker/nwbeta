import React from 'react'
import { Column, Row } from 'simple-flexbox'
import Layout from '../comps/layout'

export default () => (
  <Layout>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Wearable Bear</h1>
        </Row>
        <p>A bear with a pin to wear and two buttons to play</p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/wearable-bear'>
            <img alt='github-logo'
              src='/static/github32px.png'/>
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/wearable-bear-badge/'>
            <img className='product-image' 
              src='../static/wearable/bear11.png' alt='' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/wearable-bear-badge/'>
            <img className='product-image' 
              src='../static/wearable/bear22.png' alt='' />
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
