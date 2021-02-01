import React from "react";
import { useMutation } from "react-query";
import {
  Paper,
  Button,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { useState } from "react";

export default function Authority() {
  const [gal, setGal] = useState({ name: "" });
  const handler = (e) => {
    setGal({ name: e.target.value });
  };
  const [status, setStatus] = useState({});

  const postGal = () => {
    const pic = document.getElementById("image").files;
    var data = new FormData();
    data.append("gal", pic[0]);
    data.append("gal", JSON.stringify(gal));
    console.log(gal);
    return fetch("/admin/gal", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => setStatus(res))
      .catch((err) => {
        console.log(err);
      });
  };
  const [authority, meta] = useMutation(postGal);

  return (
    <Paper>
      <h3 className="p-2" style={{ textAlign: "center" }}>
        Event-Gallery
      </h3>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          authority();
        }}
      >
        <div className="frm">
          <label>
            Name<span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" name="name" required onChange={handler} />
        </div>
        <div className="frm">
          <label>
            Image<span style={{ color: "red" }}>*</span>
          </label>
          <input type="file" id="image" required />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <Button
            type="submit"
            style={{ marginBottom: "10px" }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
      {status.status === 200 ? (
        <div style={{ color: "green", textAlign: "center" }}>{status.msg}</div>
      ) : status.status === 404 ? (
        <div style={{ color: "red", textAlign: "center" }}>{status.error}</div>
      ) : null}
    </Paper>
  );
}
