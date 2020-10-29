import './App.css';
import React from 'react';

function App() {
  return (
    <>
    <div className="page__container">
      <header className="header page__header">
        <div className="header__logo"/>
      </header>

      <main className="page__main">
        <section className="profile page__profile">
          <div className="profile__info">
            <div className="profile__photo-container">
              <img className="profile__photo" src="#" alt="Фотография профиля" />
            </div>
            <div className="profile__heading">
              <h1 className="profile__title">Sergei</h1>
              <button className="profile__edit-btn"/>
            </div>
            <p className="profile__subtitle">dude</p>
          </div>
          <button className="profile__add-btn"/>
        </section>

        <section className="page__elements">
          <ul className="elements">
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia. Сергей Компаниец</p>
      </footer>
      <div className="modal modal_type_edit-profile">
        <div className="modal__container">
          <span className="modal__close-btn"/>
          <h2 className="modal__title">Редактировать профиль</h2>
          <form className="modal__form" action="#" method="POST" noValidate name="editProfileForm">
            <input type="text" className="modal__input-txt modal__input-txt_type_name" value="" name="name"
                   placeholder="Имя" required minLength="2" maxLength="40" autoComplete="off" />
              <span className="modal__input-error" id="name-error"/>
              <input type="text" className="modal__input-txt modal__input-txt_type_job" value="" name="about"
                     placeholder="Ваша профессия?" required minLength="2" maxLength="200" autoComplete="off" />
                <span className="modal__input-error" id="about-error"/>
                <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
          </form>
        </div>
      </div>

      <div className="modal modal_type_edit-avatar">
        <div className="modal__container">
          <span className="modal__close-btn"/>
          <h2 className="modal__title">Обновить аватар</h2>
          <form className="modal__form" action="#" method="POST" noValidate name="editAvatarForm">
            <input type="url" className="modal__input-txt modal__input-txt_type_edit-avatar" value="" name="link"
                   placeholder="Ссылка на новое фото" autoComplete="off" />
              <span className="modal__input-error" id="link-error"/>
              <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
          </form>
        </div>
      </div>

      <div className="modal modal_type_add-place">
        <div className="modal__container">
          <span className="modal__close-btn"/>
          <h2 className="modal__title">Новое место</h2>
          <form className="modal__form" action="#" method="POST" noValidate name="addPlaceForm">
            <input type="text" className="modal__input-txt modal__input-txt_type_place-name"
                   value="" name="placeName" placeholder="Название" required minLength="1"
                   maxLength="30" />
              <span className="modal__input-error" id="placeName-error"/>
              <input type="url" className="modal__input-txt modal__input-txt_type_img-url"
                     value="" name="placeUrl" placeholder="Ссылка на картинку" required />
                <span className="modal__input-error" id="placeUrl-error"/>
                <input type="submit" className="modal__sbmt-btn" value="Создать" name="save" />
          </form>
        </div>
      </div>

      <div className="modal modal_type_del-submit">
        <div className="modal__container">
          <span className="modal__close-btn"/>
          <h2 className="modal__title modal__title_type_del-submit">Вы уверены?</h2>
          <form className="modal__form" action="#" name="delPlaceSubmit">
            <input type="submit" className="modal__sbmt-btn modal__sbmt-btn_type_del-submit" value="Да"
                   name="deletePlace" />
          </form>
        </div>
      </div>

      <section className="modal modal_type_preview">
        <div className="modal__preview-container">
          <span className="modal__close-btn modal__close-btn_type_preview"/>
          <img className="modal__preview-img" src="#" alt="" />
            <p className="modal__preview-subtitle"/>
        </div>
      </section>
    </div>
      </>
  );
}

export default App;
