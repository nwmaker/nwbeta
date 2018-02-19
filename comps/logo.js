import React from 'react'
//import Logo from '../svgs/nwmaker.svg'
import Logo from './logo-imgsvg'
//import Logo from './svg-icon'

export default () => (
  <div className='nwmaker-logo'>  
    <Logo />
    <style jsx global>{`
      .nwmaker-logo {
        height: 60px;
      }
      .nwmaker-logo img {
        height: 60px;
      }
    `}</style>
  </div>
)
