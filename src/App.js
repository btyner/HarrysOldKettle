import React from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="MasterContainer">
        <MainMenu />
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default App;
