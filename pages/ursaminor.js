import React from 'react'
import { Column, Row } from 'simple-flexbox'
import Layout from '../comps/layout'

export default () => (
  <Layout>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>Ursa Minor</h1>
        </Row>
        <p>A polar cub with the Ursa Minor twinkling</p>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/ursaminor'>
            <img alt='github-logo'
              src='/static/github32px.png'/>
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/ursaminor-soldering-kit/'>
            <img className='product-image' 
              src='../static/ursaminor/ursaminor_1on1none_800x360.png' alt='' />
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
