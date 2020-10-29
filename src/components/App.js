import React, { useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWithForm from './ModalWithForm';

function App() {

  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isAddPlaceModalOpen, setIsAddPlaceModalOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarModalOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlaceModalOpen(true);
  };

  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}/>
          <Footer copyright="© 2020 Mesto Russia. Сергей Компаниец" />
          <ModalWithForm />
        </div>
      </div>
    </>
  );
}

export default App;
