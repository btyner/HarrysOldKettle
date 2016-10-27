import React from 'react';

export default function Menu() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

function Header() {
  const bgImg = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/menu-bg.jpg)"
  };

  return (
    <header style={bgImg}>
      <div className="pagebox">

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