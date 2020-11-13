import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/api';
import Card from './Card';
import Spinner from './Spinner';
import { CurrentUserContext} from "../contexts/CurrentUserContext";

const Main = ({
  onEditAvatar, onEditProfile, onAddPlace, onCardClick,
}) => {

  const userData = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      api.getInitialCardList()
    ])
        .then((result) => {
        const cardsData = result[0];
        const items = cardsData.map((item) => ({
          id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes.length,
        }));

        setIsLoading(false);
        setCards(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="page__main">
      <section className="profile page__profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} className="profile__photo-container">
            <img className="profile__photo" src={userData.avatar} alt="Фотография профиля" />
          </div>
          <div className="profile__heading">
            <h1 className="profile__title">{userData.name}</h1>
            <button onClick={onEditProfile} className="profile__edit-btn" type="button" aria-label="Edit" />
          </div>
          <p className="profile__subtitle">{userData.about}</p>
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
