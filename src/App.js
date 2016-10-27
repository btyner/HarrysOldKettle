import React, {Component} from 'react';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="MasterContainer">
        <MainMenu />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
