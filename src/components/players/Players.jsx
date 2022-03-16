import React from 'react'
import './players.css';
import AVT1 from '../../assets/schmiddy.jpg'
import AVT2 from '../../assets/rolend.jpg'
import AVT3 from '../../assets/myleg.jpg'
import AVT4 from '../../assets/sprintzer.jpg'

import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

// Import Swiper React components
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: AVT1,
    name: 'Schmiddy',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a ut voluptates odio maxime cumque, minima nam qui veritatis consequatur praesentium aliquam soluta dolore. Molestias libero eos ipsam harum id. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a ut voluptates odio maxime cumque, minima nam qui veritatis consequatur praesentium aliquam soluta dolore. Molestias libero eos ipsam harum id.sLorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a ut voluptates odio maxime cumque, minima nam qui veritatis consequatur praesentium aliquam soluta dolore. Molestias libero eos ipsam harum id.'
  },
  {
    avatar: AVT2,
    name: 'Rolend',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a ut voluptates odio maxime cumque, minima nam qui veritatis consequatur praesentium aliquam soluta dolore. Molestias libero eos ipsam harum id. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a ut voluptates odio maxime cumque, minima nam qui veritatis consequatur praesentium aliquam soluta dolore. Molestias libero eos ipsam harum id.'
  },
  {
    avatar: AVT3,
    name: 'MyLeg',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a ut voluptates odio maxime cumque, minima nam qui veritatis consequatur praesentium aliquam soluta dolore. Molestias libero eos ipsam harum id.'
  },
  {
    avatar: AVT4,
    name: 'Sprintzer',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi a ut voluptates odio maxime cumque, minima nam qui veritatis consequatur praesentium aliquam soluta dolore. Molestias libero eos ipsam harum id.'
  }
]
const Players = () => {
  return (
    <section id='players'>
      <h5>Check Out the Players</h5>
      <h2>Player Info</h2>

      <Swiper className='container players__container'
        modules={[Pagination]} 
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, info}, index) => {
            return (
              <SwiperSlide key={index} className='player'>
                <div className='player__avatar'>
                  <img src={avatar} alt="Player Avatar"/>
                </div>
                <h5 className='player__name'>{name}</h5>
                <div className='player__socials'>
                  <a href="https://facebook.com" target='_blank'><FaFacebookF/></a>
                  <a href="https://instagram.com" target='_blank'><FiInstagram/></a>
                  <a href="https://twitter.com" target='_blank'><IoLogoTwitter/></a>
                </div>
                <small className='player__info'>{info}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Players