import React from "react";
import "./SIP.scss";

export default function SIP() {
  return (
    <div className="sip_1">
      <div className="contain1">
        <div id="wrapper">
          <h1 class="glitch" data-text="SIP 2021">
            SIP 2021
          </h1>
        </div>
        <div class="sign body">
          <span class="sign__word">START-UP INTERNSHIP PROGRAM</span>
          <p className="paras">
            SIP(Start-up Internship Program) is designed to meet the demand of
            excited and curious students of NITH who want to know more about the
            start-up community and wish to pursue their career in start-up
            space. It provides students with an opportunity of internship
            experience at a start-up along with helping them develop peer
            connections with other SIP interns and strengthening their overall
            professional development. SIP aims to assist these curious minds to
            get a richer understanding of the start-up industry and gain
            substantial professional experience by working at various
            forward-thinking entrepreneurial institutions. It would also
            elucidate to them about various career possibilities and different
            facets of a start-up organization.
          </p>
        </div>
        {/*<div className="coming">Coming Soon. Stay Tuned !</div>
         */}
        <div class="body3">
          <a href="/sip/register" className="href1">
            <p>
              <span>REGISTER NOW</span>
            </p>
          </a>
        </div>
        <div className="camp">
          You can check the company list{" "}
          <a
            href="https://ecell-website.s3.ap-south-1.amazonaws.com/sip_company_details.pdf"
            target="blank"
          >
            here
          </a>
        </div>
      </div>
    </div>
  );
}
