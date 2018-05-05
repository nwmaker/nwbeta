import React from 'react'
import { Column, Row } from 'simple-flexbox'
import Layout from '../comps/layout'

export default () => (
  <Layout>
    <div className='product-container'>
      <Column flexGrow={1}>
        <Row horizontal='center'>
          <h1 className='product-header'>SMD 0201 Challenge</h1>
        </Row>
        <Row horizontal='center'>
          <a href='https://github.com/nwmaker/smd0201'>
            <img alt='github-logo'
              src='/static/github32px.png'/>
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/smd-0201-soldering-challenge/'>
            <img className='product-image' 
              src='../static/smd0201/smd_pcb.png' alt='' />
          </a>
        </Row>
        <Row horizontal='center'>
          <a href='https://www.tindie.com/products/nwmaker/smd-0201-soldering-challenge/'>
            <img className='product-image' 
              src='../static/smd0201/smd_allLedOn.png' alt='' />
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
