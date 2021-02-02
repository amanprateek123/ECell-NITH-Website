import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Card from "./Card/Card";
import gif from "../../loading.gif";

export default function Blogs() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((res) => {
        setBlog(res);
      });
  }, []);

  return (
    <div className="blogs">
      <h1 className="head2">Blogs</h1>
      {blog.length > 0 ? (
        <div className="list_blog">
          {blog.map((data) => (
            <Card data={data} key={data._id} />
          ))}
          )
        </div>
      ) : (
        <div className="spin">
          <img src={gif} />
        </div>
      )}
    </div>
  );
}
