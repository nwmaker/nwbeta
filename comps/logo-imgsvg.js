import React from 'react'

export default () => (
  <div className='logo-imgsvg'>
    <img src='../static/nwmaker.svg' alt=''/>
    <style jsx>{`
      .logo-imgsvg {
        filter: invert(.5) sepia(1) saturate(5) hue-rotate(175deg);
      }
    `}</style>
  </div>
)
