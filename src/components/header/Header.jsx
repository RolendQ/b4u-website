import React from 'react'
import './header.css'
import HeaderPlus from './HeaderPlus'
import LOGO from '../../assets/logo.png'
import HeaderSide from './HeaderSide'
import IDVLOGO from '../../assets/IdentityVWhite.png'
import CLOGO from '../../assets/idvchineselogo.png'
import NAEU from '../../assets/naeu.png'
import { useWindowScrollPositions } from '../../index.js'
import videoBg from '../../assets/team_intro.mov'

const Header = () => {
  const { scrollX, scrollY } = useWindowScrollPositions();
  const maxScroll = document.body.offsetHeight - window.innerHeight;
  const scrollRatio = scrollY / maxScroll;

  return (
    <header>
      <div className="header__overlay"></div>
      <video className="header__bgvideo" src={videoBg} autoPlay loop muted />
      <div className="container header__container">
        <div className="logo__chinese">
          <img src={CLOGO} alt="IDV Logo Chinese" className='idv__logo__chinese' />
        </div>
        <div className="logo__naeu">
          <img src={NAEU} alt="NAEU Logo" className='idv__naeu' />
        </div>
        <h5>B4U</h5>
        <h1>Before You</h1>
        <h5 className="text-light">Identity V Team</h5>
        <HeaderPlus />
        <HeaderSide />

        {/*<div className="logo">
          <img src={LOGO} alt="B4U Logo" />
        </div>*/}

        <a href="#about" className='scroll__down'>Scroll Down</a>
      
        <img src={IDVLOGO} alt="IDV Logo" className={scrollRatio >= 0.02 ? 'idv__logo__show' : 'idv__logo__hide'}/>
      </div>
    </header>
  )
}

export default Header