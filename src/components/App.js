import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWithForm from './ModalWithForm';
import ImageModal from './ImageModal';

function App() {
  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarModalOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlaceModalOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarModalOpen(false);
    setIsEditProfileModalOpen(false);
    setIsAddPlaceModalOpen(false);
    setSelectedCard(false);
  };

  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />

          <Footer copyright="© 2020 Mesto Russia. Сергей Компаниец" />

          <ModalWithForm
            name="edit-avatar"
            title="Обновить аватар?"
            children={(
              <>
                <input
                  type="url"
                  className="modal__input-txt modal__input-txt_type_edit-avatar"
                  name="link"
                  placeholder="Ссылка на новое фото"
                />
                <span className="modal__input-error" id="link-error" />
                <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
              </>
            )}
            isOpen={isEditAvatarModalOpen}
            onClose={closeAllPopups}
          />

          <ModalWithForm
            name="edit-profile"
            title="Редактировать профиль"
            children={(
              <>
                <input
                  type="text"
                  className="modal__input-txt modal__input-txt_type_name"
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
                  name="about"
                  placeholder="Ваша профессия?"
                  required
                  minLength="2"
                  maxLength="200"
                  autoComplete="off"
                />
                <span className="modal__input-error" id="about-error" />
                <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
              </>
          )}
            isOpen={isEditProfileModalOpen}
            onClose={closeAllPopups}
          />

          <ModalWithForm
            name="add-place"
            title="Новое место"
            children={(
              <>
                <input
                  type="text"
                  className="modal__input-txt modal__input-txt_type_place-name"
                  name="placeName"
                  placeholder="Название"
                  required
                  minLength="1"
                  maxLength="30"
                />
                <span className="modal__input-error" id="placeName-error" />
                <input
                  type="url"
                  className="modal__input-txt modal__input-txt_type_img-url"
                  name="placeUrl"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="modal__input-error" id="placeUrl-error" />
                <input type="submit" className="modal__sbmt-btn" value="Создать" name="save" />
              </>
            )}
            isOpen={isAddPlaceModalOpen}
            onClose={closeAllPopups}
          />
        </div>

        <ImageModal card={selectedCard} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
