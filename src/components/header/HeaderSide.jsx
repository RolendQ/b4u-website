import {BsYoutube} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'

const HeaderSide = () => {
  return (
    <div className='side'>
        <a href="https://www.youtube.com/c/Schmiddy" target="_blank"><BsYoutube/></a>
        <a href="https://discord.gg/2ZgnuCGzwb" target="_blank"><BsDiscord/></a>
    </div>
  )
}

export default HeaderSide