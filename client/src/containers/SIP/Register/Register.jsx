import React, { useState } from "react";
import "./Register.scss";
import { Button, TextField, Chip, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Register() {
  const [tab, setTab] = useState(1);
  const [companies, setCompanies] = useState([]);
  let a = ["Google", "Amazon", "Microsoft", "IBM", "Infotech"];
  const schema = {
    email: "",
    name: "",
    contact: "",
    roll: "",
    course: "",
    branch: "",
    year: "",
  };
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState({});

  const [data, setData] = useState(schema);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handle = (e) => {
    if (
      !companies.includes(e.target.value) &&
      e.target.value != "" &&
      companies.length < 3
    ) {
      setCompanies([...companies, e.target.value]);
    }
  };
  const deleteHandle = (val) => {
    let index = companies.indexOf(val);
    let b = [...companies];
    b.splice(index, 1);
    setCompanies(b);
  };
  console.log(data);

  const postSIP = (e) => {
    e.preventDefault();
    const pic = document.getElementById("image").files;
    var formData = new FormData();
    formData.append("sip", pic[0]);
    formData.append(
      "sip",
      JSON.stringify({ data: data, companies: companies })
    );
    return fetch("/api/sip", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setStatus(res);
        setOpen(true);
        if (res.status === 200) {
          setTimeout(() => {
            window.location = "/sip/register";
          }, 4000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let form1 = (
    <React.Fragment>
      <p>
        Kindly fill your personal details carefully. Invalid or wrong
        information may lead to the rejection of your CV. Duplication may lead
        to complications, hence fill this form only once.
      </p>
      <div className="form_fill">
        <div className="forum">
          <div className="section1">
            <div>
              <h4>Email</h4>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Name</h4>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Contact No.</h4>
              <input
                type="text"
                placeholder="Enter your Contact No."
                name="contact"
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Roll No.</h4>
              <input
                type="text"
                placeholder="Enter your Roll No."
                name="roll"
                onChange={handleChange}
              />
            </div>
            <div>
              <h4>Course</h4>
              <select name="course" onChange={handleChange}>
                <option value="">Select Course</option>
                <option> B.Tech </option>
                <option> M.Tech </option>
                <option> B.Arch </option>
                <option> MBA </option>
                <option> B.Tech + M.Tech (Dual Degree) </option>
              </select>
            </div>
            <div>
              <h4>Branch</h4>
              <select name="branch" onChange={handleChange}>
                <option value="">Select Branch</option>
                <option>Computer Science and Engineering</option>
                <option>Electronics and Communication Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Chemical Engineering</option>
                <option>Civil Engineering</option>
                <option>Electrical Engineering</option>
                <option>Material Science and Engineering</option>
              </select>
            </div>
            <div>
              <h4>Year</h4>
              <select name="year" onChange={handleChange}>
                <option value="">Select Year</option>
                <option> 1st Year </option>
                <option> 2nd Year </option>
                <option> 3rd Year </option>
                <option> 4th Year </option>
                <option> 5th Year </option>
              </select>
            </div>
          </div>
          <div className="btns_31">
            <Button className="butn" onClick={() => setTab(2)}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  let form2 = (
    <React.Fragment>
      <p>
        You can apply to a maximum of 3 companies as per the policies of the
        program. Kindly select the companies of your preference accordingly. Do
        make sure that you meet the company criterias and requirements as
        mentioned on the website.
      </p>
      <div className="form_fill">
        <div className="forum">
          <div className="section1">
            <div style={{ gridColumn: "1/3" }}>
              <h4>Prefered Companies</h4>
              <select onChange={handle}>
                <option value="">Select Companies</option>
                {a.map((item) => (
                  <option value={item}> {item} </option>
                ))}
              </select>
              <div className="chip">
                {companies.map((item) => (
                  <Chip
                    label={item}
                    onDelete={() => deleteHandle(item)}
                    className="ch"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="btns_31">
            <Button
              className="butn"
              style={{ margin: "0 1em" }}
              onClick={() => setTab(1)}
            >
              Previous
            </Button>
            <Button className="butn" onClick={() => setTab(3)}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  let form3 = (
    <React.Fragment>
      <p>
        Upload you CV in a PDF format of size less than 2 MB. The same CV will
        be sent to all the companies that has been selected by you, hence keep
        this in mind while preparing your CV.
      </p>
      <div className="form_fill">
        <div className="forum">
          <div className="section1">
            <div style={{ gridColumn: "1/3" }}>
              <h4>Upload your CV</h4>
              <input type="file" id="image" required />
            </div>
          </div>
          <div className="btns_31">
            <Button
              className="butn"
              style={{ margin: "0 1em" }}
              onClick={() => setTab(2)}
            >
              Previous
            </Button>
            <Button className="butn" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <div className="register">
      <div className="div">
        <div className="form_main">
          <form
            encType="multipart/form-data"
            className="frm"
            onSubmit={postSIP}
          >
            <h2>Startup Internship Program 2k21</h2>
            {tab === 1 ? form1 : tab === 2 ? form2 : tab === 3 ? form3 : null}
          </form>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
          >
            <Alert
              onClose={() => setOpen(false)}
              severity={status.status === 200 ? "success" : "error"}
            >
              {status.message}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}
