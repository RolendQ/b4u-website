import './about.css'
import TEAM_FRONT from '../../assets/coa8_rvl_team_en.jpg'
import TEAM_BACK from '../../assets/coa8_rvl_bumper.png'
import {FaAward} from 'react-icons/fa'
import {RiEarthFill} from 'react-icons/ri'
import {FaFlagUsa} from 'react-icons/fa'

import Modal from './Modal'
import { useState } from 'react'

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFront, setIsFront] = useState(true);
  const flipTimer = {};
  const onClickImg = () => {
    clearTimeout(flipTimer);
    setIsFront(!isFront);
  };
  const onMouseImg = () => {
    clearTimeout(flipTimer);
    flipTimer = setTimeout(() => {setIsFront(!isFront)},600);
  };

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__us">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div className="flip-card-front">
                <img src={TEAM_FRONT} alt="Our Team"></img>
              </div>
              <div className="flip-card-back">
                <img src={TEAM_BACK} alt="Our Team 2"></img>
              </div>
            </div>
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
              <h5>International Players</h5>
              <small>COA IV ('21) - COA VIII ('25)</small>
            </article>
            <article className="about__card">
              <FaFlagUsa className="about__icon"/>
              <h5>Regional Champs</h5>
              <small>10 Wins in NA-EU</small>
            </article>
          </div>

          <p>
           Before You (B4U prev. RVL) is a competitive Identity V esports team based in the United States.
It was created in April 2020 by team captain Schmiddy. The current roster also includes MyLeg, Rolend, Sprintzer, Green, Anton, and Aron. After five years, the team has won numerous regional tournaments and represented the North America-Europe region in the Call of the Abyss Global Finals all five times. 
          </p>

          <button className='modal__btn' onClick={() => setIsOpen(true)}>
            Read More <b>{'>'}</b>
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}

          <a href="#contact" className="about__contact">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

export default About