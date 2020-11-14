import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/api';
import Card from './Card';
import Spinner from './Spinner';
import { CurrentUserContext} from "../contexts/CurrentUserContext";

const Main = ({
  onEditAvatar, onEditProfile, onAddPlace, onCardClick,
}) => {

  const currentUser = useContext(CurrentUserContext);

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
          _id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes,
          owner: item.owner,
        }));

        setIsLoading(false);
        setCards(items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  function handleCardLike(card) {

    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
      const newCards = cards.map((item) => item._id === card._id ? newCard : item);
      setCards(newCards);
    })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCardDelete(card) {
    console.log(card);
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((item) => item._id !== card._id);
        setCards(newCards);
      })
  }

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
          {isLoading
            ? <Spinner />
            : cards.map((card) => <Card key={card._id}
                                        card={card}
                                        onCardClick={onCardClick}
                                        onCardLike={handleCardLike}
                                        onCardDelete = {handleCardDelete} />)}
        </ul>
      </section>

    </main>
  );
};

export default Main;
