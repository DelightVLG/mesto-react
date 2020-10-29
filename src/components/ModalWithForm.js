import React from 'react';

const ModalWithForm = ({ name, title, children, isOpen }) => {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? 'modal_is-open' : 'lol'}`}>
      <div className="modal__container">
        <span className="modal__close-btn" />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" name={name} action="#">
          {children}
        </form>
      </div>
    </div>
  )
}

export default ModalWithForm;
