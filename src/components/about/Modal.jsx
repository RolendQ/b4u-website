import { RiCloseLine } from "react-icons/ri";
import TEAMPIC1 from '../../assets/ivs2024_team.jpg'
import TEAMPIC2 from '../../assets/coa7_interview.jpg'

const Modal = ({ setIsOpen }) => {
  return (
    <div className='modal'>
      <div className='modal__rest' onClick={() => setIsOpen(false)} />
      <div className='modal__overlay'></div>
      <div className='modal__content'>
          <button className='modal__close btn btn-primary' onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
        <h3 className="modal__title">About Us</h3>
        <div className="modal__images">
          <img className="modal__image" src={TEAMPIC1} alt="Our Team"></img>
          <img className="modal__image" src={TEAMPIC2} alt="Our Team"></img>
        </div>
        <p className="modal__description">
           Before You (B4U prev. RVL) is a competitive Identity V esports team based in the United States. It was created in April 2020 by team captain Schmiddy. The current roster also includes MyLeg, Rolend, Sprintzer, Green, Anton, and Aron. After five years, the team has won numerous regional tournaments and represented the North America-Europe region in the Call of the Abyss Global Finals all five times.

<br/><br/>When Before You started, the original roster consisted of Schmiddy, MyLeg, Paulblems, Docman, Sprintzer, and 464. While all of them were veteran players, only Schmiddy and MyLeg had previous professional-level experience. They had been part of another team that achieved top 8 in COA II. Still, the original lineup had a successful debut, winning their first official tournament, the NA-EU Summer Tournament of 2020.

<br/><br/>COA IV marked their first global appearance. Their coach, Perswayable, led them to be the sole team representing the entire NA-EU region. At COA V, the Before You faced off against the team, Wolves, who went on to win the whole championship. Afterwards, Qing, a member since 2020, accepted a great opportunity to play competitively for China’s professional team, ACT. Later on, for COA VI, Before You picked up a new coach, Aron, who had previous playing experience. At COA VI, Before You was just a single half-round away from beating GW, a professional Chinese team.

<br/><br/>At COA VII, Before You was once again close to beating professional teams TE and SZ but this time secured a flawless 2-0 victory against Cat, the best team from Korea. The summer after, Before You was signed by Rival Esports and participated in their second global competition, Identity V Stellaris (IVS). Unfortunately, in both IVS and COA VIII, they lost to strong teams, but they were still able to score small victories including a survivor 3-escape against Gr Jin.

        </p>
      </div>
    </div>
  );
};

export default Modal;