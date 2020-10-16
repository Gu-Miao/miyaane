import React from 'react'
import Img from '@components/Img'
import minimize from '@assets/images/minimize.png'
import maximize from '@assets/images/maximize.png'
// import unmaximize from '@assets/images/unmaximize.png'
import close from '@assets/images/close.png'
import './style.scss'

const TrafficeButton = ({ children, onClick }) => {
  return (
    <button className="traffic-button" type="button" onClick={onClick}>
      {children}
    </button>
  )
}

const TitleBar = () => {
  return (
    <div id="title-bar">
      <div className="title">MiyaAne</div>
      <div className="traffic-group">
        <TrafficeButton>
          <Img src={minimize} alt="minimize" />
        </TrafficeButton>
        <TrafficeButton>
          <Img src={maximize} alt="maximize" />
        </TrafficeButton>
        <TrafficeButton>
          <Img src={close} alt="close" />
        </TrafficeButton>
      </div>
    </div>
  )
}

export default TitleBar
