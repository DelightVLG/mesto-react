import React from 'react';

const ModalWithForm = ({
  name, title, children, isOpen, onClose, onSubmit,
}) => (
  <div className={`modal modal_type_${name} ${isOpen ? 'modal_is-open' : ''}`}>
    <div className="modal__container">
      <span onClick={onClose} className="modal__close-btn" />
      <h2 className="modal__title">{title}</h2>
      <form
        className="modal__form"
        onSubmit={onSubmit}
        name={name}
        action="#"
      >
        {children}
      </form>
    </div>
  </div>
);

export default ModalWithForm;
