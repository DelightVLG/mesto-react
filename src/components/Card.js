import React from 'react';

const Card = ({ card, onCardClick }) => {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <>
      <li className="elements__element" key={card.id}>
        <img src={card.link} alt="" className="elements__img" onClick={handleClick} />
        <div className="elements__footer">
          <h2 className="elements__title">{card.name}</h2>
          <div className="elements__like-container">
            <button className="elements__like-btn" />
            <p className="elements__like-counter">{card.likes}</p>
          </div>
          <button className="elements__del-btn" />
        </div>
      </li>
    </>
  );
};

export default Card;
