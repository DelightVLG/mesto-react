import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Card = ({
  card, onCardClick, onCardLike, onCardDelete,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`elements__del-btn ${!isOwn
    ? 'elements__del-btn_is-hidden'
    : ''}`);

  const isLiked = card.likes.some((like) => like._id === currentUser._id);
  const cardLikeButtonClassName = (`elements__like-btn ${isLiked
    ? 'elements__like-btn_is-active'
    : ''}`);

  function handleClick() {
    onCardClick(card);
  }

  function handleLike() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <>
      <li className="elements__element" key={card._id}>
        <img src={card.link} alt="" className="elements__img" onClick={handleClick} />
        <div className="elements__footer">
          <h2 className="elements__title">{card.name}</h2>
          <div className="elements__like-container">
            <button className={cardLikeButtonClassName} onClick={handleLike} />
            <p className="elements__like-counter">{card.likes.length}</p>
          </div>
          <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} />
        </div>
      </li>
    </>
  );
};

export default Card;
