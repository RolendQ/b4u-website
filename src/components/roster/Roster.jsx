import React from 'react'
import './roster.css'
import {FaHandsHelping} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {GiWalkingBoot} from 'react-icons/gi'
import {FaWrench} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {GiDaemonSkull} from 'react-icons/gi'

const Roster = () => {
  return (
    <section id='roster'>
      <h5>Who is on B4U</h5>
      <h2>Current Roster</h2>

      <div className="container roster__container">
        <div className="roster__survivors">
          <h3 className='faction'>Survivors</h3>
          <div className="roster__content">
              <article className="roster__details">
                  <MdHealthAndSafety className="roster__details-icon"/>
                  <div>
                    <h4>Rolend</h4>
                    <small className='text-light'>Rescuer</small>
                  </div>
              </article>
              <article className="roster__details">
                  <FaHandsHelping className="roster__details-icon"/>
                  <div>
                    <h4>Schmiddy</h4>
                    <small className='text-light'>Support</small>
                  </div>
              </article>
              <article className="roster__details">
                  <GiWalkingBoot className="roster__details-icon"/>
                  <div>
                    <h4>Paulblems</h4>
                    <small className='text-light'>Kiter</small>
                  </div>
              </article>
              <article className="roster__details">
                  <FaWrench className="roster__details-icon"/>
                  <div>
                    <h4>MyLeg</h4>
                    <small className='text-light'>Decoder</small>
                  </div>
              </article>
              <article className="roster__details">
                  <FaBook className="roster__details-icon"/>
                  <div>
                    <h4>Aron</h4>
                    <small className='text-light'>Coach</small>
                  </div>
              </article>
          </div>
        </div>
        <div className="roster__hunters">
          <h3 className='faction'>Hunters</h3>
          <div className="roster__content">
            <article className="roster__details">
                <GiDaemonSkull className="roster__details-icon"/>
                <div>
                    <h4>Sprintzer</h4>
                    <small className='text-light'>Hunter</small>
                </div>
            </article>
            <article className="roster__details">
                <GiDaemonSkull className="roster__details-icon"/>
                <div>
                    <h4>Qing (ACT)</h4>
                    <small className='text-light'>Hunter</small>
                </div>
            </article>
            <article className="roster__details">
                <GiDaemonSkull className="roster__details-icon"/>
                <div>
                    <h4>Pitstopers</h4>
                    <small className='text-light'>Hunter</small>
                </div>
            </article>
          </div>

        </div> 
      </div>
    </section>
  )
}

export default Roster