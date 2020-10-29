import React from 'react';

const Main = () => {
  const handleEditProfileClick = () => {
    document.querySelector('.modal_type_edit-profile').classList.add('modal_is-open');
  };

  const handleEditAvatarClick = () => {
    document.querySelector('.modal_type_edit-avatar').classList.add('modal_is-open');
  };

  const handleAddPlaceClick = () => {
    document.querySelector('.modal_type_add-place').classList.add('modal_is-open');
  };

  return (
    <main className="page__main">
      <section className="profile page__profile">
        <div className="profile__info">
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div onClick={handleEditAvatarClick} className="profile__photo-container">
            <img className="profile__photo" src="#" alt="Фотография профиля" />
          </div>
          <div className="profile__heading">
            <h1 className="profile__title">Sergei Kompanietc</h1>
            <button onClick={handleEditProfileClick} className="profile__edit-btn" type="button" aria-label="Edit" />
          </div>
          <p className="profile__subtitle">Junior front-end engineer</p>
        </div>
        <button onClick={handleAddPlaceClick} className="profile__add-btn" type="button" aria-label="Add" />
      </section>

      <section className="page__elements">
        <ul className="elements" />
      </section>

      <div className="modal modal_type_edit-profile">
        <div className="modal__container">
          <span className="modal__close-btn" />
          <h2 className="modal__title">Редактировать профиль</h2>
          <form className="modal__form" action="#" method="POST" noValidate name="editProfileForm">
            <input
              type="text"
              className="modal__input-txt modal__input-txt_type_name"
              value=""
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
              value=""
              name="about"
              placeholder="Ваша профессия?"
              required
              minLength="2"
              maxLength="200"
              autoComplete="off"
            />
            <span className="modal__input-error" id="about-error" />
            <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
          </form>
        </div>
      </div>

      <div className="modal modal_type_edit-avatar">
        <div className="modal__container">
          <span className="modal__close-btn" />
          <h2 className="modal__title">Обновить аватар</h2>
          <form className="modal__form" action="#" method="POST" noValidate name="editAvatarForm">
            <input
              type="url"
              className="modal__input-txt modal__input-txt_type_edit-avatar"
              value=""
              name="link"
              placeholder="Ссылка на новое фото"
              autoComplete="off"
            />
            <span className="modal__input-error" id="link-error" />
            <input type="submit" className="modal__sbmt-btn" value="Сохранить" name="save" disabled />
          </form>
        </div>
      </div>

      <div className="modal modal_type_add-place">
        <div className="modal__container">
          <span className="modal__close-btn" />
          <h2 className="modal__title">Новое место</h2>
          <form className="modal__form" action="#" method="POST" noValidate name="addPlaceForm">
            <input
              type="text"
              className="modal__input-txt modal__input-txt_type_place-name"
              value=""
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
              value=""
              name="placeUrl"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="modal__input-error" id="placeUrl-error" />
            <input type="submit" className="modal__sbmt-btn" value="Создать" name="save" />
          </form>
        </div>
      </div>

      <div className="modal modal_type_del-submit">
        <div className="modal__container">
          <span className="modal__close-btn" />
          <h2 className="modal__title modal__title_type_del-submit">Вы уверены?</h2>
          <form className="modal__form" action="#" name="delPlaceSubmit">
            <input
              type="submit"
              className="modal__sbmt-btn modal__sbmt-btn_type_del-submit"
              value="Да"
              name="deletePlace"
            />
          </form>
        </div>
      </div>

      <div className="modal modal_type_preview">
        <div className="modal__preview-container">
          <span className="modal__close-btn modal__close-btn_type_preview" />
          <img className="modal__preview-img" src="#" alt="" />
          <p className="modal__preview-subtitle" />
        </div>
      </div>

    </main>
  );
};

export default Main;
