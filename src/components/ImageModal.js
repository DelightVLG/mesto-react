import React from 'react';

const ImageModal = () => {
  return (
    <div className="modal modal_type_preview">
      <div className="modal__preview-container">
        <span className="modal__close-btn modal__close-btn_type_preview" />
        <img className="modal__preview-img" src="#" alt="" />
        <p className="modal__preview-subtitle" />
      </div>
    </div>
  )
};

export default ImageModal;
