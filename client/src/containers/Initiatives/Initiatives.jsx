import React, { useEffect } from "react";
import { useState } from "react";
import "./Initiatives.scss";
import gif from "../../loading.gif";

function typedArrayToURL(typedArray, mimeType) {
  return URL.createObjectURL(new Blob([typedArray], { type: mimeType }));
}

export default function Initiatives() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch("/api/initiative")
      .then((res) => res.json())
      .then((res) => {
        setEvent(res);
      });
  }, []);

  let url = "";
  function hi(arr) {
    const STRING_CHAR = event.length
      ? arr.image.data.reduce((data, byte) => {
          return data + String.fromCharCode(byte);
        }, "")
      : null;
    let base64String = btoa(STRING_CHAR);
    url = "data:image/jpg;base64," + base64String;
    return url;
  }

  return (
    <div className="initi">
      <h1 className="heads">Our Initiatives</h1>
      {event.length ? (
        <div className="containers1">
          <div className="b1 box">
            <a
              href={`/events/${event[0]._id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="cont"
                style={{ backgroundImage: `url(${event[0].image})` }}
              >
                <div className="eve">
                  <h2> {event[0].eventName} </h2>
                </div>
              </div>
            </a>
          </div>
          {event.slice(1).map((item) => (
            <div className="b2 box" key={item._id}>
              <a
                href={`/events/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="conts"
                >
                  <div className="eves">
                    <h2> {item.eventName} </h2>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="spin">
          <img src={gif} />
        </div>
      )}
    </div>
  );
}
