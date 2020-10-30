import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';
import Spinner from './Spinner';

const Main = ({
  onEditAvatar, onEditProfile, onAddPlace, onCardClick,
}) => {
  console.log('MAIN RENDERED');

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.getUserInfo()
      .then(((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      }));
  }, []);

  useEffect(() => {
    setIsLoading(true);

    api.getInitialCardList()
      .then((data) => {
        const items = data.map((item) => ({
          id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes.length,
        }));
        setIsLoading(false);
        setCards(items);
      });
  }, []);

  return (
    <main className="page__main">
      <section className="profile page__profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} className="profile__photo-container">
            <img className="profile__photo" src={userAvatar} alt="Фотография профиля" />
          </div>
          <div className="profile__heading">
            <h1 className="profile__title">{userName}</h1>
            <button onClick={onEditProfile} className="profile__edit-btn" type="button" aria-label="Edit" />
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-btn" type="button" aria-label="Add" />
      </section>

      <section className="page__elements">
        <ul className="elements">
          {isLoading
            ? <Spinner />
            : cards.map((card) => <Card key={card.id} card={card} onCardClick={onCardClick} />)}
        </ul>
      </section>

    </main>
  );
};

export default Main;
