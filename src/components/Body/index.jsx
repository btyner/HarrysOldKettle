import React from 'react';
import './body.css';

function Body() {
  return (
    <main>
      <section className="whats-on-callouts">
        <div className="pagebox">
        <WhatsOnCallout
          headingImgSrc={process.env.PUBLIC_URL + "/img/whats-on-tap.png"}
          headingImgAlt="What's on tap"
          picImgSrc={process.env.PUBLIC_URL + "/img/beers-on-tap.jpg"}
          picImgAlt="Large selection of beers on tap!"
          linkUrl="/"
          linkText="Craft Beer Menu">
          The line up’s always changing but it’s always tasty and ALWAYS the best selection in town.
        </WhatsOnCallout>
        <WhatsOnCallout
          headingImgSrc={process.env.PUBLIC_URL + "/img/whats-on-grill.png"}
          headingImgAlt="What's on the grill"
          picImgSrc={process.env.PUBLIC_URL + "/img/burger.jpg"}
          picImgAlt="Handcrafted burgers will make your mouth water!"
          linkUrl="/"
          linkText="Food Menu">
          Before a show or after drinks, grab a bite from our fully equipped kitchen.
        </WhatsOnCallout>
          <div className="clearfix"></div>
        </div>
      </section>
      <div className="pagebox">
        <section className="testimonials">
          <img src={process.env.PUBLIC_URL + "/img/left-quote.png"} alt="Starting quote mark"/>
          <p>Legendary bar in Wabash. Great place to meet up with friends, watch sports, play pool or hang out.
            The stories and history of this establishment are endless.</p>
          <div className="author">– Dirk, Yelp Reviewer</div>
          <img src={process.env.PUBLIC_URL + "/img/right-quote.png"} alt="Ending quote mark"/>
        </section>
      </div>
      <div className="beige">
        <div className="pagebox">
          <div className="place-to-be-callouts">
            <figure>
              <img src={process.env.PUBLIC_URL + "/img/hok-place-to-be.png"} alt="Harry's Old Kettle: The Place to Be in Wabash!"/>
            </figure>
            <section>
              <PlaceToBe imgSrc={process.env.PUBLIC_URL + "/img/jukebox.jpg"}>Jam to today’s hits and yesterday’s classics on our TouchTunes jukebox — now controllable using your smartphone!</PlaceToBe>
              <PlaceToBe imgSrc={process.env.PUBLIC_URL + "/img/nascar.jpg"}>NASCAR Saturdays, football Sundays — whenever your favorite sport or team is competing, you’ll find them on one of our six large, high definition TVs.</PlaceToBe>
              <PlaceToBe imgSrc={process.env.PUBLIC_URL + "/img/honeywell-center.jpg"}>Catching a show at the Honeywell Center? We’ll get you in, get you fed and get you out in plenty of time — and welcome you back once your show ends!</PlaceToBe>
              <PlaceToBe imgSrc={process.env.PUBLIC_URL + "/img/coaster.jpg"}>Whether you’re back in town or here for the first time, you’re sure to find friends — or make new ones — at Harry’s Old Kettle Pub & Grill.</PlaceToBe>
            </section>
          </div>
        </div>
      </div>
      <div className="establishment">A Wabash Establishment Since 1948</div>
      <div className="old-saloon-profile">
        <div className="pagebox">
          <article>
            <figure>
              <img src={process.env.PUBLIC_URL + "/img/harry-profile-pic.png"} alt="Harry and Judy"/>
            </figure>
            <p>From 2013, Harry’s chef-inspired menu to Judy’s famous drinks, “Harry’s Old Kettle Pub & Grill” is THE place to be in Wabash.</p>
            <a href="/">
              <figure>
                <img src={process.env.PUBLIC_URL + "/img/kettle-story.png"} alt="The Kettle Story"/>
              </figure>
            </a>
          </article>
        </div>
      </div>
    </main>
  )
}

function WhatsOnCallout(props) {
  return (
      <article>
        <figure className="heading">
          <img src={props.headingImgSrc} alt={props.headingImgAlt} />
        </figure>
        <figure className="picture">
          <img src={props.picImgSrc} alt={props.picImgAlt} />
        </figure>
        <p>{props.children}</p>
        <a href={props.linkUrl}>{props.linkText}</a>
      </article>
    )
}

function PlaceToBe(props) {
  return (
    <article>
      <figure>
        <img src={props.imgSrc} alt={props.children} />
      </figure>
      <div className="separator"></div>
      <p>{props.children}</p>
    </article>
  )
}

export default Body;