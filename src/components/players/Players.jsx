import './players.css';
import SCHMIDDY from '../../assets/RVL_Schmiddy_1.png'
import ROLEND from '../../assets/RVL_Rolend_1.png'
import MYLEG from '../../assets/RVL_MyLeg_1.png'
import SPRINTZER from '../../assets/RVL_Sprintzer_1.png'
import GREEN from '../../assets/RVL_Green_1.png'
import YINL from '../../assets/RVL_YinL_1.png'
import ANTON from '../../assets/RVL_Anton_1.png'
import ARON from '../../assets/Aron.png'

import COA2 from '../../assets/coa2.jpg'
import COA4 from '../../assets/coa4.jpg'
import COA5 from '../../assets/coa5.jpg'
import COA6 from '../../assets/coa6.jpg'
import COA7 from '../../assets/coa7.png'
import COA8 from '../../assets/coa8.png'

import {BsYoutube} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";

// Import Swiper React components
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    avatar: SCHMIDDY,
    name: 'Schmiddy',
    info: "Schmiddy is a well-known player that started playing competitively and uploading on his YouTube in May 2019. His first tournament was COA II where he and his teammate MyLeg placed top 8 internationally. Afterwards, Schmiddy and MyLeg went on to start a new club, Before You, in April 2020. As captain, he picked up the rest of the team in preparation for COA IV and beyond. At the start, Schmiddy mainly played kiters for his team including Seer and Coordinator. In the most recent tournaments, he has also been playing Acrobat, Embalmer, and Fire Investigator.",
    badges: [COA2,COA4,COA5,COA6,COA7,COA8],
    youtube: "https://www.youtube.com/c/schmiddy",
    twitter: "https://x.com/TSchmiddddy",
    instagram: "https://www.instagram.com/schmidddy_"
  },
  {
    avatar: SPRINTZER,
    name: 'Sprintzer',
    info: "Sprintzer is a globally-known player with exceptional hunter skills. Some refer to him as \"Xi Xuan\" for being similar in performance and character pool as Dong Xuan. He was included in the first roster of Before You where he starred as a unique Clown main. However, his following performance playing Dream Witch, Wax Artist, and Opera Singer showcased his advanced game sense and skills. With the release of new hunters, Sprintzer has also brought a new arsenal of hunters into his tournament matches including Goatman and Ivy.",
    badges: [COA4,COA5,COA6,COA7,COA8],
    youtube: "https://www.youtube.com/@sprintzer",
    twitter: "https://x.com/sprintz3r",
  },
  {
    avatar: MYLEG,
    name: 'MyLeg',
    info: "MyLeg is a skillful player who even joined Identity V in the beta before official western release.  He made his debut on a team called HM where he first met Schmiddy. They then played together in COA II and placed top 8 internationally. As MyLeg practiced the new meta of different seasons, he has consistently been known for his strong kiting. His most notable character was Minds Eye which stood out when he kited Soul Weaver in COA II. Since then, MyLeg has picked up other characters including Priestess, Psychologist, Mechanic. Although he has yet to make a stream of his own, MyLeg can occasionally be seen on his teammates' livestreams.",
    badges: [COA2,COA4,COA5,COA6,COA7,COA8]
  },
  {
    avatar: ROLEND,
    name: 'Rolend',
    info: "Rolend is a season-one player who joined B4U in August 2020. Before he joined the team, he was a frequent rank player for both the hunter and survivor factions. His first tournament was actually the NA-EU summer tournament of 2020 where he played as a hunter on the team LBM who faced B4U in the finals. Although Rolend had played both factions before, he now mainly focuses on playing survivor for B4U. As a rescuer main, he specializes in characters like Mercenary, First Officer, and Gravekeeper.",
    badges: [COA4,COA5,COA6,COA7,COA8],
    twitter: "https://x.com/rolendqk",
    instagram: "https://www.instagram.com/rolendq"
  },
  {
    avatar: GREEN,
    name: 'Green',
    info: "Green is a rank-enthusiast, known for playing and streaming high tier content. Although he joined Before You more recently, he has been playing since almost the start of the server. Green is reknown for having some of the most consistent kiting skills in the entire server despite having to go against Sprintzer multiple times. He often plays characters like Aeroplanist, Acrobat, and Puppeteer, but is always willing to try new characters for the team.",
    badges: [COA8],
    youtube: "https://www.youtube.com/@green_idv",
    twitter: "https://x.com/IdvGreen6",
    instagram: "https://www.instagram.com/mistakengreen/"
  },
  {
    avatar: YINL,
    name: 'YinL',
    info: "YinL is a passionate team member and holds a unique trait of being the only member to play in China for multiple professional teams including Wolves and GW. Once an opponent of Before You, now he plays for the team while residing in the United States. He has many hours of rigorous training under his belt and his tournament performances definitely show this. He loves kiting and playing characters like Prisoner and Postman.",
    badges: [COA6,COA7,COA8]
  },
  {
    avatar: ANTON,
    name: 'Anton',
    info: "Anton, despite often being registered as a player, is one of the two coaches of the team. Even as a coach, he plays consistently at a high level and is always looking for new strategies to benefit the team. He is very serious about trying new characters or coming up with unique combinations to maximize the team's chances of winning. While he focuses on giving pointers to the survivors, he also can play niche characters like Toy Merchant and Meteorologist.",
    badges: [COA7,COA8]
  },
  {
    avatar: ARON,
    name: 'Aron',
    info: "Aron is the head coach of the team. He is a veteran player that stepped away from being a survivor in order to put Before You's potential first. He is able to quickly recognize what the team needs to prove themselves on the global scene. He has worked extensively with Sprintzer to make his hunter decisions perfect. Meanwhile, he has worked with Schmiddy to ensure the survivor team has a plan at all times. One of his biggest contributions is analyzing opponents' data to produce the best ban and pick options. ",
    badges: [COA6,COA7,COA8],
    twitter: "https://x.com/RVL_Aron?t=-XZrZChGlCyQaxxJZCYyJA&s=09",
  }
]
const Players = () => {
  return (
    <section id='players'>
      <h5>Check Out the Players</h5>
      <h2>Player Info</h2>

      <Swiper className='container players__container'
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        >
        {
          data.map(({avatar, name, info, badges, youtube, twitter, instagram}, index) => {
            return (
              <SwiperSlide key={index} style={{backgroundImage: `url(${avatar}`}} className='player'>
                <div className='overlay'></div>
                <h5 className='player__name'>{name}</h5>
                <div className='player__badges'>
                  {badges.map((badge,i) => <img className='player__badge' src={badge} alt="COA2 badge"></img>)}
                </div>
                <div className='player__socials'>
                  {youtube !== undefined && <a href={youtube} target='_blank'><BsYoutube/></a>}
                  {twitter !== undefined && <a href={twitter} target='_blank'><FaXTwitter/></a>}
                  {instagram !== undefined && <a href={instagram} target='_blank'><FiInstagram/></a>}
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