import React from 'react';
import { Link } from 'react-router';

export default function Directions() {
  return (
    <div className="directions-page">
      <Header />
      <Body />
    </div>
  )
}

function Header() {
  const bgImg = {
    backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/harrys-old-kettle-building.jpg)"
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
      <div className="start-content directions">
          <section className="contact-info">
              <figure>
                  <img src="/img/directions.png" alt="Get Directions"/>
              </figure>
              <div className="google-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24161.355245927556!2d-85.834175!3d40.802271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ec732ecdc8d781b!2sHarry&#39;s+Old+Kettle+Pub+%26+Grill!5e0!3m2!1sen!2sin!4v1477618920573" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="allowFullScreen"></iframe>
              </div>
              <div className="info">
                  <div className="title">ADDRESS</div>
                  <div className="text">
                      Harry’s Old Kettle Pub & Grill<br/>
                      1633 Stitt Street Wabash, IN 46992
                  </div>
                  <a href="https://www.google.com/maps/dir//40.8026606,-85.8467065/@40.802661,-85.846706,16z?hl=en-US" className="get-directions-link" target="_blank" />
                  <div className="title">HOURS</div>
                  <dl className="hours-list">
                      <dt>Monday</dt>
                      <dd>11AM–12AM</dd>
                      <dt>Tuesday</dt>
                      <dd>11AM–12AM</dd>
                      <dt>Wednesday</dt>
                      <dd>11AM–1AM</dd>
                      <dt>Thursday</dt>
                      <dd>11AM–1AM</dd>
                      <dt>Friday</dt>
                      <dd>11AM–3AM</dd>
                      <dt>Saturday</dt>
                      <dd>11AM–3AM</dd>
                      <dt>Sunday</dt>
                      <dd>11AM–12AM</dd>
                  </dl>
              </div>
              <div className="clearfix"></div>
          </section>
      </div>
    </main>
  )
}