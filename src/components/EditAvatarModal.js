import React from 'react';
import ModalWithForm from './ModalWithForm';

function EditAvatarModal({ isOpen, onClose, onUpdateAvatar }) {
  const changeAvatar = React.useRef('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: changeAvatar.current.value,
    });
  };

  return (
    <ModalWithForm
      name="edit-avatar"
      title="Обновить аватар?"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      children={(
        <>
          <input
            ref={changeAvatar}
            type="url"
            className="modal__input-txt modal__input-txt_type_edit-avatar"
            name="link"
            placeholder="Ссылка на новое фото"
          />
          <span className="modal__input-error" id="link-error" />
          <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" />
        </>
      )}
    />
  );
}

export default EditAvatarModal;
