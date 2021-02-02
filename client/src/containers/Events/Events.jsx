import React, { useState, useEffect } from "react";
import "./Events.scss";
import { Button } from "@material-ui/core";

export default function Events(props) {
  const [event, setEvent] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch(`/api/initiatives?id=${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setEvent(res);
      });
  }, []);

  useEffect(() => {
    if (event.length > 0) {
      fetch(`/api/gal?name=${event[0].eventName}`)
        .then((res) => res.json())
        .then((res) => {
          setImage(res);
        });
    }
  }, [event.length]);

  //   let url = "";
  //   function hi(arr) {
  //     const STRING_CHAR = event.length
  //       ? arr.image.data.reduce((data, byte) => {
  //           return data + String.fromCharCode(byte);
  //         }, "")
  //       : null;
  //     let base64String = btoa(STRING_CHAR);
  //     url = "data:image/jpg;base64," + base64String;
  //     return url;
  //   }
  let time = new Date().getTime();
  return event.length > 0 ? (
    <div className="events">
      <div className="info">
        <div className="cont">
          <h4> {event[0].eventName} </h4>
          <h5> {event[0].sub} </h5>
          <i>Sponsored by :- {event[0].sponsor} </i>
          <p> Date: {event[0].date} </p>
          {new Date(event[0].date).getTime() > time ? (
            <Button className="btns1" variant="contained" color="inherit">
              Register Now
            </Button>
          ) : (
            <p style={{ color: "red", fontWeight: "bold", margin: "3em 0" }}>
              {" "}
              The event registration was closed...!
              <br />
              Better luck next time!{" "}
            </p>
          )}
        </div>
        <div className="pic">
          <img src={event[0].image} />
        </div>
      </div>
      <div className="about_event">
        <h5>About</h5>
        <i> {event[0].description} </i>
      </div>
      {image.length > 0 ? (
        <div className="gal1">
          <h3>Gallery</h3>
          <div className="list_gal">
            {image.map((item) => (
              <img src={item.image} className="img" key={item._id} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  ) : null;
}
