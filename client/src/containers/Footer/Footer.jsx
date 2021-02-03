import React from "react";
import "./Footer.scss";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <div id="contact">
      <div className="container mx-auto foot">
        <div className="logo_foot"></div>
        <div className="contact" id="contact">
          <h4>Contact Us</h4>
          <div className="det">
            <MailIcon />
            <span>entrepreneurshipcellnith@gmail.com</span>
          </div>
          <div className="det">
            <PhoneIcon />
            <span>+916393222078</span>
          </div>
          <div className="det">
            <LocationOnIcon />
            <span>E-Cell NIT Hamirpur</span>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/eclubnith" target="blank">
              <FacebookIcon fontSize="inherit" />
            </a>
            <a href="https://www.instagram.com/ecell_nith/" target="blank">
              <InstagramIcon fontSize="inherit" />
            </a>
            <a
              href="https://www.linkedin.com/company/entrepreneurshipcellnith/"
              target="blank"
            >
              <LinkedInIcon fontSize="inherit" />
            </a>
            <a href="https://twitter.com/ecellnith" target="blank">
              <TwitterIcon fontSize="inherit" />
            </a>
          </div>
        </div>
      </div>
      <div className="end">
        <h4>THE ENTREPRENEURSHIP CELL, NITH</h4>
        <p>© 2020-21 All Rights Reserved. Designed by E-Cell,NIT Hamirpur</p>
      </div>
    </div>
  );
}
