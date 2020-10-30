import React from 'react';

const ImageModal = ({ card, onClose }) => {
  return (
    <div className={`modal modal_type_preview ${card.isImgOpen ? 'modal_is-open' : ''}`}>
      <div className="modal__preview-container">
        <span onClick={onClose} className="modal__close-btn modal__close-btn_type_preview" />
        <img className="modal__preview-img" src={card.link} alt={card.name} />
        <p className="modal__preview-subtitle">{card.name}</p>
      </div>
    </div>
  );
};

export default ImageModal;
