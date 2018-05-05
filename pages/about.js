import React from 'react'
import { Column, Row } from 'simple-flexbox'
import Layout from '../comps/layout'

export default () => (
  <Layout>
    <Column flexGrow={1}>
      <Row horizontal='center'>
        <h1>A design studio on electronics crafts</h1>
      </Row>
      <Row vertical='center'>
        <Column flexGrow={1} horizontal='center'>
          <h2> Hardware </h2>
          <span> Customized PCB design </span>
        </Column>
        <Column flexGrow={1} horizontal='center'>
          <h2> Software </h2>
          <span> Embedded, mobile/web programming </span>
        </Column>
        <Column flexGrow={1} horizontal='center'>
          <h2> System </h2>
          <span> From concept to product </span>
        </Column>
      </Row>
    </Column>
  </Layout>
)
