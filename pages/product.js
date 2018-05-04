import React from 'react'
import { Column, Row } from 'simple-flexbox'
import Layout from '../comps/layout'
import Link from 'next/link'

export default () => (
  <Layout>
    <Column flexGrow={1}>
      <Row horizontal='center'>
        <h1>Electronics Crafts</h1>
      </Row>
      <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
          <Link href='/beezy'>
            <a>
              <img alt='beezy-assembled'
                src='/static/beezy/beezy1s.png'/>
            </a>
          </Link>
          <span>Beezy</span>
        </Column>
        <Column flexGrow={1} horizontal='center'>
          <h3><img alt='wearable-bear'
                   src='/static/wearable/bear1s.png'/>
          </h3>
          <span>Wearable Bear</span>
        </Column>
      </Row>
      <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
          <h3><img alt='walking-ursaminors'
                   src='/static/ursaminor/ursa1s.png'/>
          </h3>
          <span>Ursa Minor</span>
        </Column>
        <Column flexGrow={1} horizontal='center'>
          <h3><img alt='smd0201-pcb'
                   src='/static/smd0201/smd1s.png'/>
          </h3>
          <span>SMD 0201 Challenge</span>
        </Column>
      </Row>
      <Row horizontal='center'>
        <a href='https://www.tindie.com/stores/nwmaker/'>
          <img alt='tindie-store' 
               width='64' height='64'
               src='/static/tindie-logo.png'/>
        </a>
      </Row>
    </Column>
  </Layout>
)
