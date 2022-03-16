import React from 'react'
import './nav.css'
import { useWindowScrollPositions } from '../../index.js'
import {AiOutlineHome} from 'react-icons/ai'
import {RiTeamLine} from 'react-icons/ri'
import {MdOutlinePersonSearch} from 'react-icons/md'
import {AiOutlineTrophy} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

/* ScrollY values don't have to be exact, error smaller like -200 */
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const { scrollX, scrollY } = useWindowScrollPositions();
  const maxScroll = document.body.offsetHeight - window.innerHeight;
  const scrollRatio = scrollY / maxScroll;
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} 
        className={scrollRatio < 0.28 ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#roster" onClick={() => setActiveNav('#roster')} 
        className={scrollRatio >= 0.28 && scrollRatio  < 0.45 ? 'active' : ''}><RiTeamLine/></a>
      <a href="#players" onClick={() => setActiveNav('#players')} 
        className={scrollRatio >= 0.45 && scrollRatio  < 0.57 ? 'active' : ''}><MdOutlinePersonSearch/></a>
      <a href="#tournaments" onClick={() => setActiveNav('#tournaments')} 
        className={scrollRatio >= 0.57 && scrollRatio  < 0.77 ? 'active' : ''}><AiOutlineTrophy/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} 
        className={scrollRatio >= 0.77  ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav