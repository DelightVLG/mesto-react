import React, { useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWithForm from './ModalWithForm';

function App() {

  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarModalOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlaceModalOpen(true);
  };

  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}/>

          <Footer copyright="© 2020 Mesto Russia. Сергей Компаниец" />

          <ModalWithForm
            name={'edit-avatar'}
            title={'Обновить аватар?'}
            children={
            <>
              <input type="url" className="modal__input-txt modal__input-txt_type_edit-avatar" value="" name="link"
                     placeholder="Ссылка на новое фото"/>
              <span className="modal__input-error" id="link-error"/>
              <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
            </>
            }
           isOpen={isEditAvatarModalOpen}/>

          <ModalWithForm
          name={'edit-profile'}
          title={'Редактировать профиль'}
          children={
            <>
            <input type="text" className="modal__input-txt modal__input-txt_type_name" value="" name="name"
                   placeholder="Имя" required minLength="2" maxLength="40" autoComplete="off" />
              <span className="modal__input-error" id="name-error"/>
            <input type="text" className="modal__input-txt modal__input-txt_type_job" value="" name="about"
                   placeholder="Ваша профессия?" required minLength="2" maxLength="200" autoComplete="off" />
              <span className="modal__input-error" id="about-error"/>
            <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
            </>
          }
          isOpen={isEditProfileModalOpen}
          />

          <ModalWithForm
            name={'add-place'}
            title={'Новое место'}
            children={
              <>
              <input type="text" className="modal__input-txt modal__input-txt_type_place-name"
                     value="" name="placeName" placeholder="Название" required minLength="1"
                     maxLength="30" />
                <span className="modal__input-error" id="placeName-error"/>
              <input type="url" className="modal__input-txt modal__input-txt_type_img-url"
                     value="" name="placeUrl" placeholder="Ссылка на картинку" required />
              <span className="modal__input-error" id="placeUrl-error" />
              <input type="submit" className="modal__sbmt-btn" value="Создать" name="save" />
              </>
            }
            isOpen={isAddPlaceModalOpen}
            />
        </div>
      </div>
    </>
  );
}

export default App;

// edit-profile edit-avatar add-place del-submit
// Редактировать профиль Обновить аватар Новое место Вы уверены?
