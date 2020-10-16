import React from 'react'
import TitleBar from './TItleBar'
import './style.scss'

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <TitleBar />
      {children}
    </div>
  )
}

export default Layout
