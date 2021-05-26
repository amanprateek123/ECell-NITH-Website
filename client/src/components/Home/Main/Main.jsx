import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import "./Main.scss";
import vid1 from "./web_1.mp4";
import vid2 from "./web_2.mp4";

export default function Main() {
  function hello() {
    window.scroll({
      top: document.body.offsetHeight / 5.8,
      left: 0,
      behavior: "smooth",
    });
  }
  const [src, setSrc] = React.useState(
    "https://ecell-bucket.s3.ap-south-1.amazonaws.com/front.mp4"
  );
  useEffect(() => {
    if (window.innerWidth < 600) {
      setSrc("https://ecell-bucket.s3.ap-south-1.amazonaws.com/front_mob.mp4");
    } else {
      setSrc("https://ecell-bucket.s3.ap-south-1.amazonaws.com/front.mp4");
    }
  }, []);
  return (
    <div className="vi">
      <video src={src} className="video" autoPlay loop muted />
      <div className="mainImgs">
        <div className="mainConts">
          <div className="contents">
            <p className="main_text">
              NATIONAL INSTITUTE OF TECHNOLOGY HAMIRPUR
            </p>
            <h2 className="ecell">ENTREPRENEURSHIP CELL</h2>
            <p className="main_text1">Cooperation is culture here...</p>
            <div className="what">
              <img
                src="https://www.ecell.in/2020/images/bottom-arrow.png"
                alt="bottom"
              />
              <p className="gets" onClick={hello}>
                What We Do?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
