import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {

  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer copyright="© 2020 Mesto Russia. Сергей Компаниец" />
        </div>
      </div>
    </>
  );
}

export default App;
