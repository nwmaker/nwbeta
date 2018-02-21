import React from 'react'

export default () => (
  <div className='logo-imgsvg'>
    <img src='../static/nwmaker.svg' alt=''/>
    <style jsx>{`
      .logo-imgsvg {
        filter: invert(.0) sepia(1) saturate(10) hue-rotate(0deg);
      }
    `}</style>
  </div>
)
