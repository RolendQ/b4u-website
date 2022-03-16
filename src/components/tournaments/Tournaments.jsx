import React from 'react'
import './tournaments.css'
import IMG1 from '../../assets/tourney1.jpg'
import IMG2 from '../../assets/tourney2.jpg'
import IMG3 from '../../assets/tourney3.jpg'
import IMG4 from '../../assets/tourney4.jpg'
import IMG5 from '../../assets/tourney5.jpg'

const Tournaments = () => {
  return (
    <section id='tournaments'>
        <h5>Our Tournaments</h5>
        <h2>YouTube VODs</h2>

        <div className="container tournaments__container">
            <article className='tournaments__item'>
                <div className='tournaments__item-image'>
                    <img src={IMG1} alt="Tournament 1"/>
                </div>
                <h3>COA V NA-EU Qualifiers</h3>
                    <small>Played on Feb 18th, 2022</small>
                    <a href="https://www.youtube.com/watch?v=ZDUfGkC2z-Q" className='btn btn-primary' target="_blank">Watch</a>
            </article>
            <article className='tournaments__item'>
                <div className='tournaments__item-image'>
                    <img src={IMG2} alt="Tournament 2"/>
                </div>
                <h3>IVT NA-EU 2021 (Fall)</h3>
                    <small>Played on Nov 5th, 2021</small>
                    <a href="https://www.youtube.com/watch?v=O6yBcOGrpzg" className='btn btn-primary' target="_blank">Watch</a>
            </article>
            <article className='tournaments__item'>
                <div className='tournaments__item-image'>
                    <img src={IMG3} alt="Tournament 3"/>
                </div>
                <h3>COA IV Globals Round 1</h3>
                    <small>Played on May 1st, 2021</small>
                    <a href="https://www.youtube.com/watch?v=EJ_-E-fVlNA" className='btn btn-primary' target="_blank">Watch</a>
            </article>
            <article className='tournaments__item'>
                <div className='tournaments__item-image'>
                    <img src={IMG4} alt="Tournament 4"/>
                </div>
                <h3>COA IV NA-EU Qualifiers</h3>
                    <small>Played on Feb 27th, 2021</small>
                    <a href="https://www.youtube.com/watch?v=co5eiPWXXbg" className='btn btn-primary' target="_blank">Watch</a>
            </article>
            <article className='tournaments__item'>
                <div className='tournaments__item-image'>
                    <img src={IMG5} alt="Tournament 5"/>
                </div>
                <h3>Summer NA-EU 2020</h3>
                    <small>Played on Jul 12th, 2020</small>
                    <a href="https://www.youtube.com/watch?v=j4yuOA6F4tk" className='btn btn-primary' target="_blank">Watch</a>
            </article>
        </div>
    </section>
  )
}

export default Tournaments