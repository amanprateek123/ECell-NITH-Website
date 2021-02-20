import React from "react";
import "./Register.scss";
import { Button, TextField } from "@material-ui/core";

export default function Register() {
  return (
    <div className="register">
      <div className="div">
        <div className="form_main">
          <div className="frm">
            <h2>Startup Internship Program 2k21</h2>
            <p>
              Kindly fill your personal details carefully. Invalid or wrong
              information may lead to the rejection of your CV. Duplication may
              lead to complications, hence fill this form only once.
            </p>
            <div className="form_fill">
              <form>
                <div className="section1">
                  <div>
                    <h4>Email</h4>
                    <input type="text" placeholder="Enter your email" />
                  </div>
                  <div>
                    <h4>Name</h4>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div>
                    <h4>Contact No.</h4>
                    <input type="text" placeholder="Enter your Contact No." />
                  </div>
                  <div>
                    <h4>Roll No.</h4>
                    <input type="text" placeholder="Enter your Roll No." />
                  </div>
                  <div>
                    <h4>Course</h4>
                    <select>
                      <option> B.Tech </option>
                      <option> M.Tech </option>
                      <option> B.Arch </option>
                      <option> MBA </option>
                      <option> B.Tech + M.Tech (Dual Degree) </option>
                    </select>
                  </div>
                  <div>
                    <h4>Branch</h4>
                    <select>
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
                    <select>
                      <option> 1st Year </option>
                      <option> 2nd Year </option>
                      <option> 3rd Year </option>
                      <option> 4th Year </option>
                      <option> 5th Year </option>
                    </select>
                  </div>
                </div>
                <div className="btns_31">
                  <Button className="butn">Next</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
