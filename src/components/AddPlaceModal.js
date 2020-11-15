import React, { useState } from 'react';
import ModalWithForm from './ModalWithForm';

function AddPlaceModal({ isOpen, onClose, onAddPlace }) {
  const [cardTitle, setCardTitle] = useState('');
  const [cardSrc, setCardSrc] = useState('');

  const handleAddTitle = (evt) => {
    setCardTitle(evt.target.value);
  };

  const handleAddSrc = (evt) => {
    setCardSrc(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onAddPlace({ cardTitle, cardSrc });
  };

  return (
    <ModalWithForm
      name="add-place"
      title="Новое место"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      children={(
        <>
          <input
            onChange={handleAddTitle}
            type="text"
            value={cardTitle || ''}
            className="modal__input-txt modal__input-txt_type_place-name"
            name="placeName"
            placeholder="Название"
            required
            minLength="1"
            maxLength="30"
          />
          <span className="modal__input-error" id="placeName-error" />
          <input
            onChange={handleAddSrc}
            type="url"
            value={cardSrc || ''}
            className="modal__input-txt modal__input-txt_type_img-url"
            name="placeUrl"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="modal__input-error" id="placeUrl-error" />
          <input type="submit" className="modal__sbmt-btn" value="Создать" name="save" />
        </>
      )}
    />

  );
}

export default AddPlaceModal;
