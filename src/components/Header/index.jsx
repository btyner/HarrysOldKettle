import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <div className="pagebox">
        <a href="/" title="Harry's Old Kettle Pub & Grill" className="logo">
          <figure>
            <img src={process.env.PUBLIC_URL + "/img/harrys-old-kettle-logo.png"} alt="Harry's Old Kettle Pub & Grill Logo"/>
          </figure>
        </a>
        <figure className="callout">
          <img src={process.env.PUBLIC_URL + "/img/welcome-great-beer-food-times.png"}
               alt="Welcome to the Kettle! Great Food, Great Beer, Great Times!"/>
        </figure>
        <a href="/" className="stop-by-today">
          <figure>
            <img src={process.env.PUBLIC_URL + "/img/stop-by-today.png"} alt="Stop by today!"/>
          </figure>
        </a>
      </div>
    </header>
  )
}

export default Header;