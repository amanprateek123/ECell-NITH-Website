import React,{useState,useEffect} from "react";
import "./High.scss";

export default function High() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch("/api/initiative")
      .then((res) => res.json())
      .then((res) => {
        let a = [...res];
        let b = a.reverse();
        setEvent(b);
      });
  }, []);
  return (
    <React.Fragment>
      <h1 className="high">Highlight Events</h1>
      <div className="highlight">
        {event.length > 0 ? (
          event.slice(1, 4).map(item => (
            <a
          href={`/events/${item._id}`}
          className="back"
          style={{ backgroundImage: `url(${item.image})` }}
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg">
            <p>
              {item.description.substring(0,400)} ...
            </p>
          </div>
        </a>
          ))
        ):null}
      </div>
    </React.Fragment>
  );
}
