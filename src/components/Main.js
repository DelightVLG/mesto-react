import React from 'react';

const Main = () => (
  <main className="page__main">
    <section className="profile page__profile">
      <div className="profile__info">
        <div className="profile__photo-container">
          <img className="profile__photo" src="#" alt="Фотография профиля" />
        </div>
        <div className="profile__heading">
          <h1 className="profile__title">Sergei Kompanietc</h1>
          <button className="profile__edit-btn" type="button" aria-label="Edit" />
        </div>
        <p className="profile__subtitle">Junior front-end engineer</p>
      </div>
      <button className="profile__add-btn" type="button" aria-label="Add" />
    </section>

    <section className="page__elements">
      <ul className="elements" />
    </section>
  </main>
);

export default Main;
