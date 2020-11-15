import React, { useState, useEffect } from 'react';
import ModalWithForm from './ModalWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeDescription = (evt) => {
    setDescription(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <ModalWithForm
      name="edit-profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={(
        <>
          <input
            type="text"
            className="modal__input-txt modal__input-txt_type_name"
            value={name || ''}
            onChange={handleChangeName}
            name="name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            autoComplete="off"
          />
          <span className="modal__input-error" id="name-error" />
          <input
            type="text"
            className="modal__input-txt modal__input-txt_type_job"
            value={description || ''}
            onChange={handleChangeDescription}
            name="about"
            placeholder="Ваша профессия?"
            required
            minLength="2"
            maxLength="200"
            autoComplete="off"
          />
          <span className="modal__input-error" id="about-error" />
          <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" />
        </>
      )}
    />

  );
}

export default EditProfileModal;
