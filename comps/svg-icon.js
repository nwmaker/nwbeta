import React from 'react'

export default ({width, height, fill}) => {
  let viewBox = [0, 0, width, height]
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={width}
      height={height}
      fill={fill}>
      <path className="svg-icon" d="M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z"></path>
    </svg>
  )
}