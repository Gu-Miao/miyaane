import React from 'react'

const Img = ({ src, alt, ...restProps }) => {
  return <img className="img" src={src} alt={alt} draggable="false" {...restProps} />
}

export default Img
