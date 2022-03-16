import React from 'react'
import {BsYoutube} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'

const HeaderSide = () => {
  return (
    <div className='side'>
        <a href="https://youtube.com" target="_blank"><BsYoutube/></a>
        <a href="https://discord.gg" target="_blank"><BsDiscord/></a>
    </div>
  )
}

export default HeaderSide