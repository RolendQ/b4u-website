import React from 'react'
import './about.css'
import TEAM from '../../assets/team1.png'
import {FaAward} from 'react-icons/fa'
import {RiEarthFill} from 'react-icons/ri'
import {FaFlagUsa} from 'react-icons/fa'

import Modal from './Modal'
import { useState } from 'react'

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={TEAM} alt="Our Team"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Veterans</h5>
              <small>Playing since Season 1</small>
            </article>
            <article className="about__card">
              <RiEarthFill className="about__icon"/>
              <h5>International</h5>
              <small>COA IV & V as NA-EU</small>
            </article>
            <article className="about__card">
              <FaFlagUsa className="about__icon"/>
              <h5>Regional</h5>
              <small>4 Wins in NA-EU</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos, impedit sed nesciunt quis dicta quos repudiandae incidunt ratione excepturi praesentium saepe consequatur maiores culpa repellat ea inventore recusandae eos.
          </p>

          <button className='modal__btn' onClick={() => setIsOpen(true)}>
            Read More <b>{'>'}</b>
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}

          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default About