import React, { useContext } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({
  onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete, onLoading,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="page__main">
      <section className="profile page__profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} className="profile__photo-container">
            <img className="profile__photo" src={currentUser.avatar} alt="Фотография профиля" />
          </div>
          <div className="profile__heading">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button onClick={onEditProfile} className="profile__edit-btn" type="button" aria-label="Edit" />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-btn" type="button" aria-label="Add" />
      </section>

      <section className="page__elements">
        <ul className="elements">
          {onLoading
            ? <Spinner />
            : cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}
        </ul>
      </section>

    </main>
  );
};

export default Main;
