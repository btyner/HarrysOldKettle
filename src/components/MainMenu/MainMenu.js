import React from 'react';
import Navigation from '../Navigation/Navigation';
import SocialIcons from '../SocialIcons/SocialIcons';

const MainMenu = (props) => (
  <nav>
    <div className="pagebox">
      <Navigation />
      <SocialIcons />
    </div>
  </nav>
);

export default MainMenu;