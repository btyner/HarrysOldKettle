import React from 'react';
import { Link } from 'react-router';

export default function NoMatch() {
  return (
    <div className="error-page">
      <Header />
      <Body />
    </div>
  )
}

function Header() {
  const bgImg = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/harrys-old-kettle.jpg)"
  };

  return (
    <header style={bgImg}>
      <div className="pagebox">
          <Link to="/" title="Harry's Old Kettle Pub & Grill" className="logo">
              <figure>
                  <img src={process.env.PUBLIC_URL + "/img/harrys-old-kettle-logo.png"} alt="Harry's Old Kettle Pub & Grill Logo"/>
              </figure>
          </Link>
      </div>
    </header>
  )
}

function Body() {
  return (
    <main>
      <div className="start-content"></div>
    </main>
  )
}