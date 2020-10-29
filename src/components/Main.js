import React from 'react';

const Main = ({ onEditAvatar, onEditProfile, onAddPlace }) => {

  return (
    <main className="page__main">
      <section className="profile page__profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} className="profile__photo-container">
            <img className="profile__photo" src="#" alt="Фотография профиля" />
          </div>
          <div className="profile__heading">
            <h1 className="profile__title">Sergei Kompanietc</h1>
            <button onClick={onEditProfile} className="profile__edit-btn" type="button" aria-label="Edit" />
          </div>
          <p className="profile__subtitle">Junior front-end engineer</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-btn" type="button" aria-label="Add" />
      </section>

      <section className="page__elements">
        <ul className="elements" />
      </section>

      {/*<div className="modal modal_type_preview">*/}
      {/*  <div className="modal__preview-container">*/}
      {/*    <span className="modal__close-btn modal__close-btn_type_preview" />*/}
      {/*    <img className="modal__preview-img" src="#" alt="" />*/}
      {/*    <p className="modal__preview-subtitle" />*/}
      {/*  </div>*/}
      {/*</div>*/}

    </main>
  );
};

export default Main;
