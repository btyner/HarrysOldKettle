import React from 'react';
import Navigation from '../Navigation';
import SocialIcons from '../SocialIcons';

function MainMenu() {
  return (
    <nav>
      <div className="pagebox">
        <Navigation />
        <SocialIcons />
      </div>
    </nav>
  )
}

export default MainMenu;