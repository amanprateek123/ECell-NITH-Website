import React, { useState, useEffect } from "react";
import "./News.scss";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import gif from "./animation.gif";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/api/api/news")
      .then((res) => res.json())
      .then((res) => {
        setNews(res);
      });
  }, []);

  return (
    <div className="news">
      <h1>News</h1>
      {news.length > 0 ? (
        <div className="news_sec">
          <div className="imgs">
            <img src={gif} />
          </div>
          <div className="cont">
            <div className="marker">
              <h5 style={{ color: "white", margin: "0", padding: ".2em" }}>
                E-Cell NITH
              </h5>
            </div>
            <div className="box">
              <marquee
                direction="up"
                behaviour="scroll"
                height="100%"
                scrollamount={2}
              >
                {news.map((itm) => (
                  <p key={itm._id}>
                    <ChevronRightIcon style={{ color: "skyblue" }} />
                    {itm.headline}
                    {/*<span>
                      <a
                        href={itm.link}
                        style={{
                          margin: "0 0 0 1em",
                          color: "skyblue",
                          cursor: "pointer",
                        }}
                        target="blank"
                      >
                        Read more
                      </a>
                      </span>*/}
                    <span style={{ marginLeft: "0.5em" }}>
                      <img
                        src="https://upsee.nic.in/WebInfo/Images/newicon.gif"
                        style={{ width: "2em" }}
                      />
                    </span>
                    {itm.link !== "/" ? (
                      <span>
                        <a href={itm.link} className="linker">
                          Read More
                        </a>
                      </span>
                    ) : null}
                  </p>
                ))}
              </marquee>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
