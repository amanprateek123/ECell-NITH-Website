import React from 'react';
import './CBTP.css';
import Button from './Button/Button';
import p7 from './p7.svg';
import Footer from '../Footer/Footer';
const CBTP = () => {
    return ( 
        <React.Fragment>
        <div className="container4">
        <div className="heading1">COMPREHENSIVE  BUSINESS TRAINING  PROGRAM</div>
        <div className="tagline">A guide for " How to start a Start-Up"</div>
        <div className="date"><div className="left"></div><div className="date1">Event Started on 25th Sept, 2021</div> <div className="right"></div></div>
        <Button/>
        </div>
        <div className="container5">
        <div className="aboutus1">
        <div className="heading2"><h1 className="h111">ABOUT US</h1></div>
        <div className="para">Being young the flow of energy in you is immense, then why not channelize it in the best way possible? The Comprehensive Business Training Program, as the name suggests, is a comprehensive 7-week certified training program for creative young minds to delve into the nitty-gritty of the business. We have strived hard to provide you with the best mentorship from experienced personalities. With this interactive session, Team E-Cell aims to orient the young minds towards entrepreneurship and start-up culture. <br />
        Most importantly, after completing the course you will be equipped with the essentials to step into the market. What are you waiting for? Grab this opportunity to make your dream come true!
        </div>
        </div>
        <img src={p7} className="image1" alt="hackor" />
        </div>
        <div className="timeline"><a href="https://drive.google.com/file/d/1kYQvVHQO0KrY2i6Yq6d1JW26Wfq4I0w_/view?usp=drivesdk" className="aba" target="_blank">TIMELINE</a></div>
        <svg className="img2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,320L60,288C120,256,240,192,360,176C480,160,600,192,720,192C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <Footer/>
        </React.Fragment>
     );
}
 
export default CBTP;