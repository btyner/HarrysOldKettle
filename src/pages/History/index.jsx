import React from 'react';
import {Link} from 'react-router';

export default function History() {
    return (
        <div className="history-page">
            <Header />
            <Body />
        </div>
    )
}

function Header() {
    const bgImg = {
        backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/img-harrys2.jpg)"
    };

    return (
        <header style={bgImg}>
            <div className="pagebox">
                <Link to="/" title="Harry's Old Kettle Pub & Grill" className="logo">
                    <figure>
                        <img src={process.env.PUBLIC_URL + "/img/harrys-old-kettle-logo.png"}
                             alt="Harry's Old Kettle Pub & Grill Logo"/>
                    </figure>
                </Link>
            </div>
        </header>
    )
}

function Body() {
    return (
        <main>
            <div className="start-content">
                <div className="pagebox">
                    <section className="leave-your-mark">
                        <figure>
                            <img src="/img/leave-your-mark.png" alt="Leave your mark on a local landmark."/>
                        </figure>
                        <p>Set down that thirst-quenching craft beer and look up from that mouthwatering burger. No,
                            really. Look UP. At Harry’s the writing isn’t on the wall, it’s on the ceiling — in the form
                            of $1 bills! For years, patrons to “The Kettle” have filled the ceiling tiles with dollar
                            bills adorned with birthday wishes, memorials and messages commemorating their visit to this
                            Wabash legend. Got a group that wants to get up there? Talk to Harry on your next visit.</p>
                    </section>
                    <section className="locally-owned">
                        <h1>Locally Owned, Locally Loved.</h1>
                        <div className="text">From its modest beginnings as a drive-in diner, to its days as the “Iron
                            Skillet” and “Howdy Bob,” the distinctive, building at 1633 Stitt Street has appealed to
                            both locals and visitors for over 50 years. Purchased in 2013 by Wabash residents Harry and
                            Judy Kilmer, the place has retained the friendly, comfortable atmosphere for which
                            generations of Wabash residents have come to know it.
                        </div>
                        <figure>
                            <img src="/img/old-saloon-pic.jpg" alt="Locally Owned, Locally Loved."/>
                        </figure>
                        <div className="clearfix"></div>
                    </section>
                </div>
            </div>
            <div className="beige history">
                <div className="pagebox">
                    <section className="awesome-accents">
                        <figure className="title">
                            <img src="/img/awesome-accents.png" alt="Excellent Eats & Awesome Accents"/>
                        </figure>
                        <figure className="owners">
                            <img src="/img/harry-Chef.jpg" alt="Harry & Judy"/>
                        </figure>
                        <div className="text">
                            <p>As a local chef, Harry always wanted to own a restaurant. As an east coast transplant, Judy’s fantastic Boston accent makes her a favorite behind the bar (even if she IS an ardent Patriots fan in a sea of Bears and Colts supporters).</p>
                            <p>Together, they’ve worked hard to maintain the spirit that “The Kettle” has always been known for — a comfortable, safe place to come and enjoy yourself. Keeping the name the same while putting their own little twist was part of that. “I wanted to show respect for the bar and didn’t want to make big changes,” says Harry.</p>
                            <p>The biggest change for Harry and Judy? Being behind the bar rather in front of it. When asked what’s most enjoyable about being the owner of a local legend like “The Kettle,” Harry says, “It’s the people. Everyone’s friendly and they seem to like to see me — but they REALLY like to see Judy.”</p>
                        </div>
                        <div className="clearfix"></div>
                    </section>
                </div>
            </div>
        </main>
    )
}