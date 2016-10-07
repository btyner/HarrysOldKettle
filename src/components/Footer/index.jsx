import React from 'react';
import SocialIcons from '../SocialIcons';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="pagebox">
        <ul itemScope="itemScope" itemType="http://schema.org/LocalBusiness">
          <li>
            <span itemProp="name">Harry’s Old Kettle Pub & Grill</span><br/>
            <span itemProp="address" itemScope="itemScope" itemType="http://schema.org/PostalAddress"><span itemProp="streetAddress">1633 Stitt St.</span> <span itemProp="addressLocality">Wabash</span>, <span itemProp="addressRegion">IN</span> <span itemProp="postalCode">46992</span></span>
          </li>
          <li>
            <a href="tel:+12605637317" itemProp="telephone" content="+12605637317">(260) 563-7317</a>
          </li>
          <li>
            <time itemProp="openingHours" dateTime="Su,Mo,Tu 11:00-00:00">Sun, Mon, Tues 11AM – 12AM</time><br/>
            <time itemProp="openingHours" dateTime="Wed,Th 11:00-01:00">Wed, Thurs 11AM – 1AM</time><br/>
            <time itemProp="openingHours" dateTime="Fri,Sat 11:00-03:00">Fri, Sat 11AM – 3AM</time>
          </li>
          <li>
            <a href="https://www.google.com/maps/dir//40.8026606,-85.8467065/@40.802661,-85.846706,16z?hl=en-US">Map</a>
          </li>
          <li>
            <SocialIcons />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;