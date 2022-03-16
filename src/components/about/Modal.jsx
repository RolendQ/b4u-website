import React from "react";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <div className='modal'>
      <div className='modal__rest' onClick={() => setIsOpen(false)} />
      <div className='modal__content'>
          <button className='modal__close btn btn-primary' onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
        <h3 className="modal__title">About Us</h3>
        <p className="modal__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error possimus inventore eos? Odit excepturi cumque nam quia animi! Eligendi expedita corporis exercitationem delectus minima cum adipisci natus veritatis sequi impedit?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nobis debitis obcaecati! Error pariatur repellendus at sequi ipsum autem amet ea libero minima eius, quod aliquid iste nulla quidem quibusdam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quidem quo sunt voluptatum quasi vitae corporis, omnis rem aut voluptates tenetur reiciendis dignissimos aperiam eveniet facere porro aliquid blanditiis iure.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus est saepe omnis maxime. Laboriosam earum perspiciatis voluptatum odit molestiae dolorum harum asperiores magnam voluptate illum, necessitatibus repellendus quis libero.
        </p>
      </div>
    </div>
  );
};

export default Modal;