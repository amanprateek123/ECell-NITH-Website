import React from "react";
import "./High.scss";
import img from "./eve.jpeg";
import img1 from "./eve1.jpeg";
import img2 from "./eve2.jpeg";
import { Link } from "@material-ui/core";

export default function High() {
  return (
    <React.Fragment>
      <h1 className="high">Highlight Events</h1>
      <div className="highlight">
        <a
          href="/events/601927ae11024a0017c59403"
          className="back"
          style={{ backgroundImage: `url(${img})` }}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg">
            <p>
              E-Cell NITH brings forth the maiden edition of SIP (Start-up
              Internship Program) to help you connect with various start-ups and
              reach out to them for industrial exposure. So don’t miss this
              cause who knows this internship may land you the affair of your
              dreams!
            </p>
          </div>
        </a>
        <a
          href="/events/601929a711024a0017c59404"
          className="back"
          style={{ backgroundImage: `url(${img1})` }}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg">
            <p>
              We the E-cell, in collaboration with Organization Committee and
              INS&Control, bring forth a quiz on a lot of fun topics with Prizes
              worth 5K.
            </p>
          </div>
        </a>
        <a
          href="/events/60192bfd11024a0017c59405"
          className="back"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "left",
          }}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg">
            <p>
              Free stocks that will make you earn thousands. Try out the market
              without investing real money. _If you are new to investment, and
              think you have what it takes to be a Stock Market Mogul, take the
              chance.
            </p>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
}
