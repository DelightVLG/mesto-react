import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImageModal from './ImageModal';
import EditProfileModal from './EditProfileModal';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditAvatarModal from './EditAvatarModal';
import AddPlaceModal from './AddPlaceModal';

function App() {
  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isImgOpen: false });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      api.getInitialCardList(),
      api.getUserInfo(),
    ])
      .then((result) => {
        const cardsData = result[0];
        const userData = result[1];

        const items = cardsData.map((item) => ({
          _id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes,
          owner: item.owner,
        }));

        setCurrentUser(userData);
        setCards(items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarModalOpen(true);
  };

  const handleUpdateAvatar = (avatarData) => {
    api.changeAvatar(avatarData)
      .then((res) => {
        setCurrentUser(res);
        closeAllModals();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleUpdateUser = (userData) => {
    api.saveUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
        closeAllModals();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAddPlaceClick = () => {
    setIsAddPlaceModalOpen(true);
  };

  const handleAddPlaceSubmit = (newCard) => {
    api
      .saveCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllModals();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCardClick = (card) => {
    setSelectedCard({ isImgOpen: true, ...card });
  };

  function handleCardDelete(card) {
    console.log(card);
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((item) => item._id !== card._id);
        setCards(newCards);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((item) => (item._id === card._id ? newCard : item));
        setCards(newCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const closeAllModals = () => {
    setIsEditAvatarModalOpen(false);
    setIsEditProfileModalOpen(false);
    setIsAddPlaceModalOpen(false);
    setSelectedCard({ isImgOpen: false });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />

          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            cards={cards}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            onLoading={isLoading}
          />

          <Footer copyright="© 2020 Mesto Russia. Сергей Компаниец" />

          <EditAvatarModal
            isOpen={isEditAvatarModalOpen}
            onClose={closeAllModals}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfileModal
            isOpen={isEditProfileModalOpen}
            onClose={closeAllModals}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlaceModal
            isOpen={isAddPlaceModalOpen}
            onClose={closeAllModals}
            onAddPlace={handleAddPlaceSubmit}
          />
        </div>

        <ImageModal card={selectedCard} onClose={closeAllModals} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
