import React, { useState, useEffect } from "react";
import "./Partners.scss";

export default function Partners() {
  const [part, setPart] = useState([]);
  useEffect(() => {
    fetch("/api/partner")
      .then((res) => res.json())
      .then((res) => {
        setPart(res);
      });
  }, []);
  const part1=[...part];
  part1.sort((a,b)=>a._no-b._no);
   console.log(part1);

  return (
    <div className="partner">
      <h1 className="head1">Partners</h1>
      {part1.length > 0 ? (
        <div className="logo_part">
          {part1.map((item) => (
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
