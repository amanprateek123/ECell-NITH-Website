import React, { useState, useEffect } from "react";
import "./Partners.scss";

export default function Partners() {
  const [part, setPart] = useState([]);
  useEffect(() => {
    fetch("/api/api/partner")
      .then((res) => res.json())
      .then((res) => {
        setPart(res);
      });
  }, []);

  return (
    <div className="partner">
      <h1 className="head1">Partners</h1>
      {part.length > 0 ? (
        <div className="logo_part">
          {part.map((item) => (
            <div key={item._id} >
              <a href={item.link} target="blank">
                <img src={item.imageURL} />
              </a>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
