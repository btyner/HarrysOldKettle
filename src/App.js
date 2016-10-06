import React from 'react';
import MainMenu from './components/MainMenu';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="MasterContainer">
      <MainMenu />
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
