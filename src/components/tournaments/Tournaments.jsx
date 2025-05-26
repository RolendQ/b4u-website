import './tournaments.css'
import thumbnail1 from '../../assets/coa8_fan.jpg'
import thumbnail2 from '../../assets/coa8_bumper.jpg'
import thumbnail3 from '../../assets/coa6_smores.jpg'
import thumbnail4 from '../../assets/coa8_group.jpg'
import thumbnail5 from '../../assets/coa8_qualifiers.jpg'
import thumbnail6 from '../../assets/ivs2024.jpg'

const data = [
  {
    thumbnail: thumbnail1,
    title: 'Team Fan Edit',
    date: 'May 20th 2025',
    link: 'https://www.youtube.com/watch?v=P_eKAgJTZN4',
  },
  {
    thumbnail: thumbnail2,
    title: 'Team Promotion Clip',
    date: 'April 11th 2025',
    link: 'https://www.youtube.com/watch?v=cqJrqfvcX28&pp=ygUVaWRlbnRpdHkgdiBiZWZvcmUgeW91',
  },
  {
    thumbnail: thumbnail3,
    title: 'Team Community Video',
    date: 'April 14th 2023',
    link: 'https://www.youtube.com/watch?v=08HfFp2-RfM',
  },
  {
    thumbnail: thumbnail4,
    title: 'COA VIII Globals Match',
    date: 'April 12th 2025',
    link: 'https://www.youtube.com/live/NXWR2UlUjMA?si=5gcOdg39uuScGdUr&t=21979',
  },
  {
    thumbnail: thumbnail5,
    title: 'COA VIII NA-EU Qualifiers',
    date: 'February 22nd 2025',
    link: 'https://www.youtube.com/live/HfuxclMIe9U?si=_ACEQ-vLskNQmA3K&t=2988',
  },
{
    thumbnail: thumbnail6,
    title: 'Identity V Stellaris 2024',
    date: 'September 25th 2024',
    link: 'https://www.youtube.com/live/_DwjtoLHZUk?si=vW90-kSduFouOK5l&t=2934',
  },
]

const Tournaments = () => {
  return (
    <section id='tournaments'>
        <h5>Team Content</h5>
        <h2>YouTube Videos</h2>

        <div className="container tournaments__container">
            {
              data.map(({thumbnail, title, date, link}, index) => {
                return (
                    <article key={index} className='tournaments__item'>
                        <div className='tournaments__item-image'>
                            <img src={thumbnail} alt={title}/>
                        </div>
                        <h3>{title}</h3>
                            <small>Uploaded on {date}</small>
                            <a href={link} className='btn btn-primary' target="_blank">Watch</a>
                    </article>
                )
              })
            }
        </div>
    </section>
  )
}

export default Tournaments