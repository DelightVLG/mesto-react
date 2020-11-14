import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWithForm from './ModalWithForm';
import ImageModal from './ImageModal';
import EditProfileModal from './EditProfileModal';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({isImgOpen: false});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.error(err)
      })
  },[]);

  const handleEditAvatarClick = () => {
    setIsEditAvatarModalOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleUpdateUser = (userData) => {
    api.saveUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllModals();
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleAddPlaceClick = () => {
    setIsAddPlaceModalOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({isImgOpen: true, ...card});
  };

  const closeAllModals = () => {
    setIsEditAvatarModalOpen(false);
    setIsEditProfileModalOpen(false);
    setIsAddPlaceModalOpen(false);
    setSelectedCard({ isImgOpen: false});
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            onClose={closeAllModals}
          />

          <EditProfileModal isOpen={isEditProfileModalOpen}
                            onClose={closeAllModals}
                            onUpdateUser={handleUpdateUser} />

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
            onClose={closeAllModals}
          />
        </div>

        <ImageModal card={selectedCard} onClose={closeAllModals} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
